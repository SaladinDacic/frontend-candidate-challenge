import React, { useEffect, useRef } from "react";
import { useTextTracking } from "../../../hooks";

type EditingListProps = {
  item: {
    id: string;
    text: string;
    done: boolean;
  };
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  toggleEditInList: (id: string) => void;
};
export const EditingList = ({ item, deleteTodo, updateTodo, toggleEditInList }: EditingListProps) => {
  const { currentText, setTodoText, shouldPrintInitial } = useTextTracking();
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={`${shouldPrintInitial ? item.text : currentText}`}
        onChange={(evt) => {
          setTodoText(evt.target.value);
        }}
        onKeyDown={(evt) => {
          if (evt.key === "Enter" && currentText.length) {
            updateTodo(item.id, currentText);
            toggleEditInList(item.id);
          }
        }}
      />
      <div>
        <button
          onClick={() => {
            deleteTodo(item.id);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            if (currentText.length) {
              shouldPrintInitial ? (updateTodo(item.id, item.text), toggleEditInList(item.id)) : (updateTodo(item.id, currentText), toggleEditInList(item.id));
            }
          }}
        >
          Save
        </button>
        <button
          onClick={() => {
            toggleEditInList(item.id);
          }}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

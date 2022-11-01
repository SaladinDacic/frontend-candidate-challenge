import React, { useEffect, useRef, useState } from "react";

type AddTodoProp = {
  addTodo: (text: string) => void;
};
export const AddTodo = ({ addTodo }: AddTodoProp) => {
  const [todoText, setTodoText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div className="addTodo">
      <input
        ref={inputRef}
        type="text"
        value={todoText}
        onChange={(evt) => {
          setTodoText(evt.target.value);
        }}
        onKeyDown={(evt) => {
          if (evt.key === "Enter" && todoText.length) {
            addTodo(todoText);
            setTodoText("");
          }
        }}
      />
      <button
        onClick={() => {
          if (todoText.length) addTodo(todoText);
        }}
      >
        Add
      </button>
    </div>
  );
};

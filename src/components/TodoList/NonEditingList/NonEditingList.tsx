import React from "react";

type NonEditingListProps = {
  item: {
    id: string;
    text: string;
    done: boolean;
  };
  toggleDone: (id: string) => void;
  deleteTodo: (id: string) => void;
  toggleEditInList: (id: string) => void;
  index: number;
};
export const NonEditingList = ({ item, toggleDone, deleteTodo, toggleEditInList, index }: NonEditingListProps) => {
  return (
    <>
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => {
          toggleDone(item.id);
        }}
      />
      <span style={{ textDecoration: `${item.done ? "line-through" : ""}` }} data-testid={`todo${index}`}>
        {item.text}
      </span>
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
            toggleEditInList(item.id);
          }}
        >
          Edit
        </button>
      </div>
    </>
  );
};

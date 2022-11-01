import { memo } from "react";
import { getEditing } from "../../utils";
import { EditingList, NonEditingList } from "./";

type TodoListProps = {
  todos: {
    id: string;
    text: string;
    done: boolean;
  }[];
  addNewTodo: (text: string) => void;
  toggleDone: (id: string) => void;
  updateTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
  editingList: {
    id: string;
    edit: boolean;
  }[];
  toggleEditInList: (id: string) => void;
};

export const TodoList = memo(({ todos, editingList, toggleEditInList, toggleDone, deleteTodo, updateTodo }: TodoListProps) => {
  return (
    <ul className="todoList">
      {todos.map((item, i) => {
        const isEditing = getEditing(item.id, editingList).edit;
        return (
          <li key={i}>
            <>{isEditing ? <EditingList deleteTodo={deleteTodo} item={item} toggleEditInList={toggleEditInList} updateTodo={updateTodo} /> : <NonEditingList index={i} item={item} toggleDone={toggleDone} toggleEditInList={toggleEditInList} deleteTodo={deleteTodo} />}</>
          </li>
        );
      })}
    </ul>
  );
});

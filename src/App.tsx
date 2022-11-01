import React, { useEffect, useState } from "react";
import { TodoList, AddTodo } from "./components";
import "./styles.scss";
import { v4 as uuidv4 } from "uuid";
export type EditableTodo = {
  id: string;
  edit: boolean;
};
export default function App() {
  const [todos, setTodos] = useState([
    { id: "todo0", text: "Buy milk", done: true },
    { id: "todo1", text: "Buy bread", done: false },
  ]);
  const [editingList, setEditingList] = useState([
    ...todos.map((todo, i) => {
      return { id: todo.id, edit: false };
    }),
  ]);
  const addTodo = (text: string) => {
    setTodos((oldTodos) => {
      const newTodos = [{ id: uuidv4(), text, done: false }, ...oldTodos];
      return newTodos;
    });
  };
  const toggleTodo = (id: string) => {
    setTodos([
      ...todos.map((val) => {
        return val.id === id ? { ...val, done: !val.done } : val;
      }),
    ]);
  };
  const editTodo = (id: string, text: string) => {
    setTodos([
      ...todos.map((val) => {
        return val.id === id ? { ...val, text } : val;
      }),
    ]);
  };
  const deleteTodo = (id: string) => {
    setTodos([
      ...todos.filter((val) => {
        return val.id !== id;
      }),
    ]);
  };

  const toggleEditInList = (id: string) => {
    setEditingList((oldList: EditableTodo[]) => {
      let newList = [...oldList];
      newList = newList.map((todo: EditableTodo) => {
        return todo.id === id ? { ...todo, edit: !todo.edit } : { ...todo, edit: false };
      });
      return newList;
    });
  };
  useEffect(() => {
    setEditingList([
      ...todos.map((todo, i) => {
        return { id: todo.id, edit: false };
      }),
    ]);
  }, [todos.length]);

  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <AddTodo addTodo={addTodo} />
      <TodoList toggleEditInList={toggleEditInList} editingList={editingList} addNewTodo={addTodo} deleteTodo={deleteTodo} toggleDone={toggleTodo} updateTodo={editTodo} todos={todos} />
    </div>
  );
}

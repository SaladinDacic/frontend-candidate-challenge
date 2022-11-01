import React, { useEffect, useRef, useState } from "react";

export const useTextTracking = () => {
  const [todoText, setTodoText] = useState("");
  const todoTextRef = useRef(todoText);
  useEffect(() => {
    todoTextRef.current = todoText;
    return () => {
      todoTextRef.current = todoText;
    };
  }, [todoText]);
  const shouldPrintInitial = todoText === todoTextRef.current;
  return { currentText: todoText, lastText: todoTextRef.current, setTodoText, shouldPrintInitial };
};

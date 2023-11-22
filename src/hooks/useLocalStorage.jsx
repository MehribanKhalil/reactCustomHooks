import React, { useEffect, useState } from "react";

const useLocalStorage = () => {
  const [todo, setTodo] = useState(
    localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
  );

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  function addTodo() {
    setTodo([...todo, "sagol"]);
  }

  return [todo, addTodo];
};

export default useLocalStorage;

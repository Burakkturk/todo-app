import React from "react";
import { useState } from "react";
const GetData = () => {
  const handleChange = (cico) => {
    setTodo(cico.target.value);
  };
  const [todo, setTodo] = useState("");
  const [todoArray, setTodoArray] = useState([]);
  const setUserTodo = () => {
    console.log(todo);
    setTodoArray([...todoArray, todo]);
    setTodo("");
  };
  return (
    <>
      <input value={todo} onChange={(bt) => handleChange(bt)} type="text" />
      <button onClick={() => setUserTodo()}>ACCEPT</button>
      {todoArray.map((todo) => {
        return <p>{todo}</p>;
      })}
    </>
  );
};

export default GetData;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../../store/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const submit = () => {
    if (text.length > 0) {
      //   dispatch(addTodo({ id: nanoid(), todo: text, completed: false }));
      const items = text.split(",");
      dispatch(
        addTodos(
          items.map((item) => ({ id: nanoid(), text: item, completed: false }))
        )
      );
    }
  };
  return (
    <div className="add-todo">
      <p>To add multiple items write them comma separated</p>
      <p>
        <i>eg: Eggs, Bread, Ham, Cheese</i>
      </p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={submit}>Add Todo</button>
    </div>
  );
};

export default AddTodo;

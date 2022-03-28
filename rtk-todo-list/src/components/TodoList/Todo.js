import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../store/todoSlice";

const Todo = ({ text, completed, id }) => {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(
      updateTodo({
        id: id,
        changes: { completed: !completed },
      })
    );
  };
  const deleteItem = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="todo">
      <input type="checkbox" value={completed} onChange={toggle} />
      <span>{text}</span>
      <button onClick={deleteItem}>x</button>
    </div>
  );
};

export default Todo;

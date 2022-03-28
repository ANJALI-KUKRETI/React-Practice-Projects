import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearTodos, restoreTodo, todoSelectors } from "../../store/todoSlice";
import Todo from "./Todo";

const TodoList = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector(todoSelectors.selectEntities);
  const todoCount = useSelector(todoSelectors.selectTotal);
  const deletedTodos = useSelector((state) => state.todos.deletedTodos);

  const todoList = [];
  for (const id in allTodos) {
    if (Object.hasOwnProperty.call(allTodos, id)) {
      const todoItem = allTodos[id];
      todoList.push(
        <Todo
          key={todoItem.id}
          id={todoItem.id}
          completed={todoItem.completed}
          text={todoItem.text}
        />
      );
    }
  }
  const restore = (todo) => {
    dispatch(restoreTodo(todo));
  };

  const deletedList = deletedTodos.map((item) => (
    <div className="deleted-todo" key={item.id}>
      <span>{item.text}</span>
      <button onClick={() => restore(item)}>Restore</button>
    </div>
  ));

  return (
    <div className="todo-list">
      <h3>Your Todos:</h3>
      <h4>Count: {todoCount}</h4>
      <button
        className="delete-btn"
        onClick={() => {
          dispatch(clearTodos());
        }}
      >
        Clear All Todos
      </button>
      <div>{todoList}</div>
      <h3>Deleted Todos</h3>
      <div>{deletedList}</div>
    </div>
  );
};

export default TodoList;

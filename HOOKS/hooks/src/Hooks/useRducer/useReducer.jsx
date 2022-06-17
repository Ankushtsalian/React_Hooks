import react, { useReducer, useState } from "react";
import reducer from "./reducer";
import Todo from "./Todo";

const App = () => {
  const [text, setText] = useState("");
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0,
  });
  const { todos, todoCount, completed } = state;
  console.log(state);

  return (
    <div className="container mt">
      <h2>To Do List</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setText("");
        }}
      >
        <input
          value={text}
          placeholder="Add new item"
          onChange={(e) => setText(e.target.value)}
        />
        &nbsp;&nbsp;
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch({ type: "add-todo", text });
          }}
        >
          Add Todo
        </button>
      </form>
      <div>number of todos: {todoCount}</div>
      {todos.map((t, idx) => (
        <div key={idx}>
          <Todo t={t} idx={idx} dispatch={dispatch} completed={completed} />
        </div>
      ))}
    </div>
  );
};

export default App;

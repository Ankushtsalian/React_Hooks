const Todo = ({ t, idx, dispatch }) => {
    const { completed, text } = t;
    return (
      <>
        <input
          type="checkbox"
          onClick={() => dispatch({ type: "toggle-todo", idx })}
        />
  
        <span
          style={{
            textDecoration: completed ? "line-through" : ""
          }}
        >
          {text}
        </span>
      </>
    );
  };
  
  export default Todo;
  
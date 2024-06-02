import React from "react";

function Todoitem({ todo, handleDelete, handleMark }) {
  return (
    <li key={todo.id} style={{ listStyleType: "none" }}>
      <div className="row g-0 text-center">
        <div className="col-sm-6 col-md-8">
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "",
              color: todo.completed ? "green" : "black",
            }}
          >
            {todo.title}{" "}
          </span>
        </div>
        <div className="col-6 col-md-4">
          <button
            className="btn btn-success butt"
            onClick={() => handleMark(todo.id)}
          >
            Mark
          </button>
          <button className="btn btn-danger" onClick={() => handleDelete(todo)}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default Todoitem;

import TodoEditText from "./TodoEditText";

export default function Todo({ todo, id, handleRemove }) {
  return (
    <div>
      <li>
        {todo}
        <button onClick={() => handleRemove(id)}>Delete</button>
      </li>
    </div>
  );
}

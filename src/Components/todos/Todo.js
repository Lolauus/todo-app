export default function Todo({ todo, id, handleRemove }) {
  return (
    <li>
      {todo}
      <button onClick={() => handleRemove(id)}>Delete</button>
    </li>
  );
}

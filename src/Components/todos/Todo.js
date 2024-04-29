import "../../Styling/Todo.css";
export default function Todo({ todo, id, handleRemove }) {
  return (
    <>
      <li>
        {todo}
        <button className="list_remove_button" onClick={() => handleRemove(id)}>
          Delete
        </button>
      </li>
    </>
  );
}

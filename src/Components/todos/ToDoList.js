import "../../Styling/ToDoList.css";

function ToDoList(props) {
  const todoTasks = props.tasks.map((n) => (
    <li key={n.id}>
      {n.title} <button onClick={() => props.handleRemove(n.id)}>Delete</button>
    </li>
  ));

  return (
    <div>
      <ul>{todoTasks}</ul>
    </div>
  );
}

export default ToDoList;

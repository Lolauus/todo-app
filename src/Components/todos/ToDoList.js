import "../../Styling/ToDoList.css";
import Todo from "./Todo";

export default function ToDoList({ tasks, handleRemove }) {
  const todoTasks = tasks.map((n) => (
    <ul key={n.id}>
      <Todo todo={n.title} id={n.id} handleRemove={handleRemove} />
    </ul>
  ));

  return <>{todoTasks}</>;
}

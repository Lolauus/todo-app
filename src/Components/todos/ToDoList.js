import Todo from "./Todo";

export default function ToDoList({ tasks, handleRemove }) {
  const todoTasks = tasks.map((n) => (
    <li key={n.id}>
      <Todo todo={n.title} id={n.id} handleRemove={handleRemove} />
    </li>
  ));

  return <ul>{todoTasks}</ul>;
}

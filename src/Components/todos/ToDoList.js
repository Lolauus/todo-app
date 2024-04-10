import "../../Styling/ToDoList.css";
function ToDoList({ tasks }) {
const todoTasks = tasks.map((n) => <li>{n.title}</li>);
  console.log(todoTasks)
  return (
<div>
      <ul>
        {todoTasks}
      </ul>
    </div>
  );
}

export default ToDoList;

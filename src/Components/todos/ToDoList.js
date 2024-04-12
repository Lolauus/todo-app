import "../../Styling/ToDoList.css";
function ToDoList({ todos }) {
const todoTasks = todos.map((n, index) => <li key={index + 1 }>{n.title} <button>Delete</button></li>);


  return (
<div>
      <ul>
        {todoTasks}
      </ul>
    </div>
  );
}

export default ToDoList;

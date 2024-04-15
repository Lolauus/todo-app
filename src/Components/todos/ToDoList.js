import { useState } from "react";
import "../../Styling/ToDoList.css";
function ToDoList({ todos }) {
const todoTasks = todos.map((n, index) => <li key={index}>{n.title} <button>Delete</button></li>);
const [remove, setRemove] = useState()

const handleRemove =() =>{
      

}

  return (
<div>
      <ul>
        {todoTasks}
      </ul>
    </div>
  );
}

export default ToDoList;

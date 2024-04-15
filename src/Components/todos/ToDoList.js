import { useState } from "react";
import "../../Styling/ToDoList.css";
function ToDoList({ todos }) {
  
const todoTasks = todos.map((n) => <li key={n.id}>{n.title} <button onClick={handleRemove}>Delete</button></li>);
const [remove, setRemove] = useState(todoTasks)
console.log(todoTasks)

function handleRemove(id) {
  const newList = remove.filter((item) => item.id !== id);
  console.log(newList)

  setRemove(newList);
}

  return (
<div>
      <ul>
        {test}
      </ul>
    </div>
  );
}

export default ToDoList;

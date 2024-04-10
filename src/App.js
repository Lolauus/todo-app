import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import ToDoList from "./Components/todos/ToDoList";
import { useState } from "react";
function App() {

  const [tasks, setTasks] = useState([
    {id:1, title: "Städa" },
    {id:2, title: "Runka" },
    {id:3, title: "Sova" },
  ]);

  const eventHandler = (e) =>{
    setTasks(tasks.title.target.value)
  }

  return (
    <div className="App">
      <ToDoList tasks={tasks} />
      <form>
        <input id="InputField" placeholder="Tasks to complete" value={tasks.value} onChange={{eventHandler}}/>
        <input type="submit"></input>

      </form>
        {/* <button onClick={eventHandler}>Add</button> */}

    </div>
  );

}

export default App;

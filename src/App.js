import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import ToDoList from "./Components/todos/ToDoList";
import { useState } from "react";
function App() {
  const initialList = [
    { id: 1, title: "städa" },
    { id: 2, title: "runka" },
    { id: 3, title: "sova" },
  ];

  const [tasks, setTasks] = useState(initialList);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo !== "") {
      console.log(tasks);
      setTasks([...tasks, { title: newTodo }]);
      setNewTodo("");
    }
  };
  return (
    <div className="App">
      <ToDoList tasks={tasks} />
      <form>
        <input
          id="InputField"
          placeholder="Tasks to complete"
          value={tasks.value}
          onChange={{ eventHandler }}
        />
        <input type="submit"></input>
      </form>
      {/* <button onClick={eventHandler}>Add</button> */}
    </div>
  );
}

export default App;

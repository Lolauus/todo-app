import ToDoList from "./Components/todos/ToDoList";
import { useId, useState } from "react";
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
      <ToDoList todos={tasks} />
      <input
        placeholder="Whats up?"
        value={newTodo}
        type="text"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="button" onClick={addTodo}>
        Add
      </button>
    </div>
  );
}

export default App;

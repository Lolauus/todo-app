import ToDoList from "./Components/todos/ToDoList";
import "./Styling/App.css";
import { useState } from "react";
export default function App() {
  const initialList = [
    { id: 1, title: "städa" },
    { id: 2, title: "runka" },
    { id: 3, title: "sova" },
  ];

  const [tasks, setTasks] = useState(initialList);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo !== "") {
      const taskWithHighestId = tasks.reduce(
        (largest, current) => (current.id > largest.id ? current : largest),
        tasks[0]
      );

      setTasks([...tasks, { id: taskWithHighestId.id + 1, title: newTodo }]);
      setNewTodo("");
    }
  };

  function removeTodo(id) {
    var tasksAfterDelete = tasks.filter((task) => task.id !== id);
    setTasks([...tasksAfterDelete]);
  }
  const removeAllTodos = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <ToDoList tasks={tasks} handleRemove={removeTodo} />
      <input
        placeholder="Whats up?"
        value={newTodo}
        type="text"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="button" onClick={addTodo}>
        Add
      </button>
      <button type="button" onClick={removeAllTodos}>
        Remove
      </button>

      <br />
      <pre>{JSON.stringify(tasks, null, 2)}</pre>
    </div>
  );
}

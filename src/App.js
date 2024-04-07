import ToDoList from "./Components/todos/ToDoList";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([
    { title: "Städa" },
    { title: "Runka" },
    { title: "Sova" },
  ]);
  return (
    <div className="App">
      <ToDoList tasks={items} />
      <button>Add</button>
    </div>
  );
}

export default App;

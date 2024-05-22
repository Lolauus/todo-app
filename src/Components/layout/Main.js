import "../../Styling/Main.css";
import ToDoList from "../todos/ToDoList";
import TodoInputField from "../todos/TodoInputField";
import { useState } from "react";
export default function Main() {
  const initialList = [
    { id: 1, title: "Städa" },
    { id: 2, title: "Dammsuga" },
    { id: 3, title: "Tvätta" },
    { id: 4, title: "Ringa samtal(viktigt)" },
  ];

  const [tasks, setTasks] = useState(initialList);
  const [newTodo, setNewTodo] = useState("");

  function onChangeHandler(e) {
    setNewTodo(e.target.value);
  }
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const addTodo = () => {
    if (newTodo !== "") {
      var taskWithHighestId = tasks.reduce(
        (largest, current) => (current.id > largest.id ? current : largest),
        tasks[0]
      );
      if (taskWithHighestId === undefined) {
        taskWithHighestId = { id: 1, title: newTodo };
      }

      setTasks([...tasks, { id: taskWithHighestId.id + 1, title: newTodo }]);
      setNewTodo("");
      console.log(tasks);
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
      <div className="todolist_holder">
        <ToDoList tasks={tasks} handleRemove={removeTodo} />
      </div>

      <div className="input_holder">
        <TodoInputField 
          newTodo={newTodo}
          handleOnChange={onChangeHandler}
          onKeyDown={handleKeyPress}
        />
        <button type="button" onClick={addTodo}>
          Add
        </button>
        <button type="button" onClick={removeAllTodos}>
          Remove
        </button>
      </div>
    </div>
  );
}

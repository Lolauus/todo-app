import "../../Styling/ToDoList.css";

function ToDoList({ todos }) {
  // const deleteTaskHandler = () => {
  //   const newToDoList = remove.filter((a) => a.id !== a.id);

  //   setRemove(newToDoList);
  //   console.log(id);
  // };
  const toDosList = todos.map((todo) => <li key={todo.id}>{todo.title}</li>);

  return (
    <div>
      <ul>{toDosList}</ul>
    </div>
  );
}

export default ToDoList;

import ToDoList from "../todos/ToDoList";

function Main() {
  return (
    <div>
      <ToDoList text="Hello" completed={false} important={true} />
    </div>
  );
}
export default Main;

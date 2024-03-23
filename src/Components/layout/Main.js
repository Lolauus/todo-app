import ToDoitem from "../todos/ToDoItem";

function Main() {
  return (
    <div>
      <ToDoitem text="Hello" completed={false} important={true} />
    </div>
  );
}
export default Main;

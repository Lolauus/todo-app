import "../../Styling/ToDoItem.css";
function ToDoitem({ text, completed, important }) {
  return (
    <div className={completed ? "completed" : ""}>
      {important ? "*" : ""}
      {text}{" "}
    </div>
  );
}
export default ToDoitem;

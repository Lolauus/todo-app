import "../../Styling/ToDoList.css";

function ToDoList({ tasks }) {
  const test = tasks.map((n) => <li>{n.title}</li>);
  return (
    <div>
      <ul>
        {/* {tasks.map((todo) => 
          <li>{todo.title}</li>        
        )} */}
        <li>{test}</li>
      </ul>
    </div>
  );
}

export default ToDoList;

import "../../Styling/Footer.css";
function Footer({ addTodo, removeAllTodos, count }) {
  console.log(count);
  return (
    <div className="footer-div">
      {count}
      <button type="button" onClick={addTodo}>
        Add
      </button>
      <button type="button" onClick={removeAllTodos}>
        Remove
      </button>
    </div>
  );
}
export default Footer;

import { useState } from "react";

const TodoEditText = ({ initialText }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);
  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <input type="text" value={text} onChange={handleChange} />
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};
export default TodoEditText;

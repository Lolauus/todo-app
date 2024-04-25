import { useRef, useEffect } from "react";
export default function TodoInputField({ handleOnChange, onKeyDown, newTodo }) {
  const InputRef = useRef();
  useEffect(() => {
    InputRef.current.focus();
  });
  return (
    <input
      placeholder="Whats up?"
      value={newTodo}
      type="text"
      onChange={handleOnChange}
      ref={InputRef}
      onKeyDown={onKeyDown}
    />
  );
}

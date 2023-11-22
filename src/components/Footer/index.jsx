import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import useToggle from "../../hooks/useToggle";

const Footer = () => {
  const [isOpen, handleClick] = useToggle();
  const [todo, addTodo] = useLocalStorage();

  return (
    <>
      <div>
        <div>sjlfsl</div>
        <div>sjlfsl</div>
        <div>sjlfsl</div>
        <div>sjlfsl</div>
        <p onClick={handleClick}>toggle islet</p>
        {isOpen ? <h2>salam</h2> : <h2>sagol</h2>}
      </div>

      <button onClick={addTodo}>+</button>
      <div>
        {todo.map((item) => (
          <li>{item}</li>
        ))}
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import { useState } from "react";
import useToggle from "../../hooks/useToggle";

const Navbar = () => {
  const [isOpen, handleClick] = useToggle();

  return (
    <div>
      <div>
        <div>
          <a>home</a>
          <a>home</a>
          <a>home</a>
          <a>home</a>
        </div>
        <div onClick={handleClick}>{isOpen ? <h2>+</h2> : <h2>-</h2>}</div>
      </div>
    </div>
  );
};

export default Navbar;

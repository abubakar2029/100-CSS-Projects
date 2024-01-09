import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Button, btnStyle } from "../entities/Button";
interface ButtonProps {
  btn: Button;
}
const Button = ({ btn }: ButtonProps) => {
  let [hover, setHover] = useState<boolean>(false);
  const btnStyles: btnStyle = {
    ...btn.style,
    backgroundColor: hover ? btn.hoverBgColor : btn.style.backgroundColor,
  };
  const handleHover = () => setHover(true);
  const handleLeave = () => setHover(false);

  return (
    <button
      to={btn.href}
      className={`rounded ${
        btn.shadow ? "shadow" : "shadow-none"
      } flex items-center justify-center`}
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
      style={btnStyles}
    >
      {btn.text}
    </button>
  );
};

export default Button;

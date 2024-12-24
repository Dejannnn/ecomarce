import React from "react";
import "./Button.css";
type Props = {
  title: string;
  handleOnClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  value: string;
};

function Button({ title, handleOnClick, value }: Props) {
  return (
    <button onClick={handleOnClick} value={value}>
      {title}
    </button>
  );
}

export default Button;

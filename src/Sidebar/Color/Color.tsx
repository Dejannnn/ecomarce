import React from "react";
import Input from "../../components/Input/Input";

import "./Color.css";
type Props = {
  handleOnClick: (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => void;
};

const Color = ({ handleOnClick }: Props) => {
  return (
    <div>
      <h2 className="sidebar-title">Color</h2>
      <div className="sidebar-items">
        <Input
          handleOnClick={handleOnClick}
          color="red"
          title="All"
          name="color"
          value="all"
        />
        <Input
          handleOnClick={handleOnClick}
          color="red"
          title="Red"
          name="color"
          value="red"
        />
        <Input
          handleOnClick={handleOnClick}
          color="blue"
          title="Blue"
          name="color"
          value="blue"
        />
        <Input
          handleOnClick={handleOnClick}
          color="orange"
          title="Orange"
          name="color"
          value="orange"
        />
        <Input
          handleOnClick={handleOnClick}
          color="green"
          title="Green"
          name="color"
          value="green"
        />
      </div>
    </div>
  );
};

export default Color;

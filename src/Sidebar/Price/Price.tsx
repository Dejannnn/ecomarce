import React from "react";
import Input from "../../components/Input/Input";

import "./Price.css";
type Props = {
  handleOnClick: (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => void;
};

function Price({ handleOnClick }: Props) {
  return (
    <div>
      <h2 className="sidebar-title">Price</h2>
      <div className="sidebar-items">
        <Input
          handleOnClick={handleOnClick}
          color="red"
          title="All"
          name="price"
          value="all"
        />
        <Input
          handleOnClick={handleOnClick}
          color="red"
          title="0-50$"
          name="price"
          value="50"
        />
        <Input
          handleOnClick={handleOnClick}
          color="red"
          title="50-100$"
          name="price"
          value="100"
        />
        <Input
          handleOnClick={handleOnClick}
          color="red"
          title="100-150$"
          name="price"
          value="150"
        />
        <Input
          handleOnClick={handleOnClick}
          color="red"
          title="150-200%"
          name="price"
          value="200"
        />
      </div>
    </div>
  );
}

export default Price;

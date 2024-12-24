import React from "react";
import Input from "../../components/Input/Input";
import "./Category.css";
type Props = {
  handleOnClick: (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => void;
};

const Category = (props: Props) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div className="sidebar-items">
        <Input
          handleOnClick={props.handleOnClick}
          color="red"
          title="All"
          name="category"
          value="all"
        />
        <Input
          handleOnClick={props.handleOnClick}
          color="red"
          title="Heels"
          name="category"
          value="heels"
        />
        <Input
          handleOnClick={props.handleOnClick}
          color="red"
          title="Flats"
          name="category"
          value="flats"
        />
        <Input
          handleOnClick={props.handleOnClick}
          color="red"
          title="Sneakers"
          name="category"
          value="sneakers"
        />
        <Input
          handleOnClick={props.handleOnClick}
          color="red"
          title="Sandals"
          name="category"
          value="sandals"
        />
      </div>
    </div>
  );
};

export default Category;

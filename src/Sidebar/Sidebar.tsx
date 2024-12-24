import React from "react";
import "./Sidebar.css";
//Components
import Category from "./Category/Category";
import Color from "./Color/Color";
import Price from "./Price/Price";

type Props = {
  handleOnClick: (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => void;
};

const Sidebar = React.memo((props: Props) => {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>
      <Category handleOnClick={props.handleOnClick} />
      <Price handleOnClick={props.handleOnClick} />
      <Color handleOnClick={props.handleOnClick} />
    </section>
  );
});

export default Sidebar;

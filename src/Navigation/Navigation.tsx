import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

import "./Navigation.css";
type Props = {
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Navigation = React.memo(({ handleOnChange }: Props) => {
  console.log("This redner tooo");
  return (
    <nav className="nav-container">
      <div>
        <input
          className="search-input"
          type="text"
          onChange={handleOnChange}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <a className="nav-icons" href="#">
          <FiHeart />
        </a>
        <a className="nav-icons" href="#">
          <AiOutlineShoppingCart />
        </a>
        <a className="nav-icons" href="#">
          <AiOutlineUserAdd />
        </a>
      </div>
    </nav>
  );
});

export default Navigation;

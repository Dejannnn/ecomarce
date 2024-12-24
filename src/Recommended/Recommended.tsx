import React from "react";
import "./Recommended.css";

//Componets
import Button from "../components/Button/Button";
type Props = {
  handleOnClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

function Recommended({ handleOnClick }: Props) {
  return (
    <div>
      <h2 className="recommended-title">Recommended:</h2>
      <div className="recommended-flex">
        <Button handleOnClick={handleOnClick} value="Nike" title="Nike" />
        <Button handleOnClick={handleOnClick} value="Addidas" title="Addidas" />
        <Button handleOnClick={handleOnClick} value="Reebok" title="Reebok" />
        <Button
          handleOnClick={handleOnClick}
          value="Converse"
          title="Converse"
        />
        <Button handleOnClick={handleOnClick} value="Puma" title="Puma" />
      </div>
    </div>
  );
}

export default Recommended;

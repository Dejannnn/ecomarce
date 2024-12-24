import "./Input.css";
type Props = {
  name: string;
  color: string;
  title: string;
  value: string;
  handleOnClick: (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => void;
};

function Input({ handleOnClick, name, color, title, value }: Props) {
  return (
    <label className="sidebar-label-container">
      <input onClick={handleOnClick} type="radio" name={name} value={value} />
      <span className="checkmark" style={{ backgroundColor: color }} />
      {title}
    </label>
  );
}

export default Input;

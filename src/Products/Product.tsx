import "./Product.css";
type Props = {
  result: JSX.Element[];
};

const Product = (props: Props) => {
  return (
    <>
      <section className="card-container">{props.result}</section>
    </>
  );
};

export default Product;

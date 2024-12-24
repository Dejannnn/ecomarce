import { useState } from "react";
import "./App.css";
//Components
import Navigation from "./Navigation/Navigation";
import Product from "./Products/Product";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card/Card";

//Data
import products from "./db/data";
function App() {
  const [brand, setBrand] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [query, setQuery] = useState("");

  const handleSerach = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    setQuery(event.currentTarget.value);
  };
  const handleBrand = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setBrand(event.currentTarget.value);
  };
  const handleCateogry = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    setCategory(event.currentTarget.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  const filterData = (products: any, category: any, query: string) => {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }
    if (category || brand) {
      filteredProducts = products.filter((product: any) => {
        if (
          product.company == brand ||
          product.category == category ||
          product.newPrice == category ||
          product.color == category
        ) {
          return product;
        }
      });
    }
    let res = filteredProducts.map((product: any) => {
      return (
        <Card
          key={Math.random()}
          img={product.img}
          title={product.title}
          star={product.star}
          reviews={product.reviews}
          prevPrice={product.prevPrice}
          newPrice={product.newPrice}
        />
      );
    });
    return res;
  };
  const result = filterData(products, category, query);

  return (
    <>
      <Sidebar handleOnClick={handleCateogry} />
      <Navigation handleOnChange={handleSerach} />
      <Recommended handleOnClick={handleBrand} />
      <Product result={result} />
    </>
  );
}

export default App;

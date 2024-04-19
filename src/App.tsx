import { useState, useEffect } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import { Data, Product, User } from "./Types";

function App() {

  const [products, setProducts] = useState<Product[] | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);
  const [counter, setCounter] = useState(0);

  const fetchProducts = () => {
    return new Promise((resolve, reject) => {
      fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((products) => setProducts(products))
        .then((value) => resolve(value))
        .catch((error) => reject(error));
    });
  };

  const fetchUsers = async () => {
    let response = await fetch("https://dummyjson.com/users");
    if (response.ok) {
      let users = await response.json();
      setUsers(users);
    } else throw new Error("failure retreiving users");
  };

  useEffect(() => {
    fetchProducts();
    fetchUsers();
  }, []);

  const addToCart = () => {
    setCounter(counter + 1);
  };

  console.log(users);

  return (
    <>
      <h1>Hello, welcome to our shop</h1>
      {products && ( // use parentheses here because it is used as the logical operator.
        //IF data && ("This Stuff")
        <ProductList
          products={products}
          addToCart={addToCart}
        ></ProductList>
      )}
      <div className="">
        <p>Your basket contains {counter} items</p>
      </div>
    </>
  );
}

export default App;

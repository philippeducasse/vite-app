import { useState, useEffect } from 'react'
import './App.css';
import Button from './components/Button';

function App() {

  interface Product {
    id: number;
    title: string;
    description: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  [key:string]: string | number
}


  interface Data {
      products?: Product[],
      users?: User[],
      total: Number,
      skip: Number,
      limit: Number

  }

  const [data, setData] = useState<Data | null>(null);
  const [users, setUsers] = useState<Data | null >(null);
  const [counter, setCounter] = useState<number>(0);


  const fetchProducts = () => {
    return new Promise((resolve, reject) => {
      fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setData(data))
      .then(value => resolve(value))
      .catch(error => reject(error))
    })
  }
  
  const fetchUsers = async() => {
    let response = await fetch('https://dummyjson.com/users');
    if(response.ok){
      let users = await response.json()
      setUsers(users)
    } else throw new Error('failure retreiving users');
  }
  
  useEffect(()=> {
    fetchProducts();
    fetchUsers()
  }, [])

  const addToCart = () => {
    setCounter(counter+1)
  }
  
  console.log(users);
  
  return (
    <>
      <h1>Hello, welcome to our shop</h1>
      {data && ( // use parentheses here because it is used as the logical operator. 
      //IF data && ("This Stuff")
        <ul>
          {data.products!.map((product) => ( // using the parenthesis here treats the value as one element,
          // and in ES2015 you can ommit the return keyword 
            <div>
              <li key={product.id}>{product.title}</li>
              <Button addToCart={addToCart}/>
            </div>
          ))}
        </ul>
      )}
      <div className="">
        <p>Your basket contains {counter} items</p>
      </div>
    </>
  )
}

export default App

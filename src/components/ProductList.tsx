import React from 'react'
import Button from './Button';
import { Product } from "../Types";

type ProductListProps = {
  addToCart: (event: React.ChangeEvent<HTMLInputElement>) => void;
  products: Product [];
}

const ProductList = ({addToCart, products}: ProductListProps) => {
  
        return (
          // use parentheses here because it is used as the logical operator.
          //IF data && ("This Stuff")
          <ul>
            {products.map(
              (
                product // using the parenthesis here treats the value as one element,
              ) => (
                // and in ES2015 you can ommit the return keyword
                <div>
                  <li key={product.id}>{product.title}</li>
                  <Button addToCart={addToCart} />
                </div>
              )
            )}
          </ul>
        );
      }

export default ProductList
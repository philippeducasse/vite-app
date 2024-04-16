import React from 'react'

const Button = ({addToCart}) => {
  return (
    <>
        <button className="button" onClick={() => addToCart()}>Add to cart</button>
    </>
  )
}

export default Button
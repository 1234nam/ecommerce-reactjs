import { useState, useEffect } from "react"

export default  function Cart({cart, setCart, products}) {


    let productInCart= []

  useEffect(()=>{

    productInCart= []
    let cart = JSON.parse(localStorage.getItem("cartItems"))
    console.log(cart)
    let proIDs= []
    proIDs = cart.productIds
    productInCart = products.filter( product => Array(proIDs).includes(product.id))
    console.log(proIDs, Array(proIDs).includes(1, 0))


  },[])

    return (
        <>
        {/* {productInCart.map((product, index) => (
            <div>{cart.count}</div>
            ))} */}
                        <div>{cart.count}</div>

        </>
    );
  }
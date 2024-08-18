import './App.css';
import Header from './Header';
import Product from './Product';
import { useState } from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom";

export default  function Home({cart, setCart, products}) {

  return (
    <>

      <main className="flex flex-wrap justify-center gap-4 p-4">

      {products.map((product, index) => (
          <Product product={product} setCart={setCart} cart={cart} index={index}/>              
      ))}

      </main>
    </>
  );
}
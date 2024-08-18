import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default  function Cart({cart, setCart, products}) {


    let [productsInCart, setproductsInCart] = useState([]);
    var navigate = useNavigate()

    
  useEffect(()=>{

    setproductsInCart(products.filter( product => product.id in cart))
  },[cart])

  function removeProduct(product){

    delete cart[product.id]      
    setCart({...cart});

  }

  function decrement(product){
    
    if(cart[product.id] != 1){
      --cart[product.id];
    } else {
      delete cart[product.id]      
    }
    
    setCart({...cart});
  }

  function increment(product){

    cart[product.id]++;
    setCart({...cart});
  }

    return (
        <>
      <div className="w-full flex justify-center">
        <div className="w-2/4 flex flex-wrap flex-col align-center">
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">

                    {productsInCart.map((product) => (

                        <li className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img src={product.image} alt="" className="h-50 w-50 object-cover object-center" />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a>{product.title}</a>
                              </h3>
                              <p className="ml-4">$ {product.price * cart[product.id]}</p>
                            </div>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div>
                            <p className="text-gray-500">Qty : {cart[product.id]}</p>
                            <p className="text-gray-500">Price : {product.price}</p>
                            <div className="flex flex-wrap">
                            <svg className="w-[25px] h-[25px] fill-[#FFFFFF] hover:bg-slate-300" onClick={ () => decrement(product) } xmlns="http://www.w3.org/2000/svg">
                            <g id="Edit / Remove_Minus">
                            <path id="Vector" d="M6 12H18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            </svg>
                            <svg  className="w-[25px] h-[25px] fill-[#FFFFFF] hover:bg-slate-300" onClick={ () => increment(product) } xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 12.75V18H12.75V12.75H18V11.25H12.75V6H11.25V11.25H6V12.75H11.25Z" fill="#080341"/>
                            </svg>
                            </div>

                            </div>
                            <div className="flex">
                              <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => removeProduct(product)}>Remove</button>
                            </div>
                          </div>
                        </div>
                        </li>            
                    ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>$ { productsInCart.reduce((sum,pro) => sum += pro.price * cart[pro.id], 0)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            <div className="mt-6">
              <a className="flex items-center justify-center rounded-md border border-transparent  bg-slate-300 px-6 py-3 font-medium text-black hover:text-white shadow-sm hover:bg-blue-600" onClick={ () => navigate("/checkout")}>Checkout</a>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or
                <button type="button" className="font-medium text-blue-600 hover:text-blue-500">
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        </div>
</div>

</>


    );
  }
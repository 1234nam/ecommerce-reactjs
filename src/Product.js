export default  function Product({product,setCart, cart}) {


    function incrementCount(id){
        let ids = []
        ids = cart.productIds;
        ids.push(id);
        console.log(ids)
        setCart({ count : ++cart.count, productIds :ids});
        console.log(cart)

        localStorage.setItem("cartItems", JSON.stringify(cart))
    }

    return (
        <>
            <div className="w-1/4 rounded overflow-hidden shadow-lg">
            <div className="flex flex-wrap justify-center">
            <img className="h-52 w-52 text-center" src={product.image} alt="Sunset in the mountains" />

            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 h-20">
                    {product.title}
                </div>
                <p className="text-gray-700 text-base">
                    {/* &#x20b9; {product.price} */}
                    $ {product.price} 
                </p>
            </div>
            <div className="px-6 pt-4 pb-4">
            <div class="mt-6">
                <a class="flex items-center justify-center rounded-md border border-transparent bg-slate-300 px-6 py-3 text-base font-medium text-black hover:text-white shadow-sm hover:bg-blue-600" onClick={()=> incrementCount(product.id)}>Add to Cart</a>
            </div>            
            </div>
            </div>
        </>

    );
  }
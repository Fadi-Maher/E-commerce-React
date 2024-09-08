import { cartContext } from "../context/cartContext";
import { useContext, useEffect, useState } from "react";
 import { FaTrashCan } from "react-icons/fa6";
 import { ColorRing } from 'react-loader-spinner';
import { Link } from "react-router-dom";
const Cart = () => {
  const [cartDetails, setCartDetails] = useState(null);
  const { getLoggedUserCart , removeCartItem  ,updateProductQuantity ,clearAllCart } = useContext(cartContext);

async function removeItem (id){
   const  {data} =  await removeCartItem(id)
   setCartDetails(data)
}

  async function getCart() {
   
    const {data} = await getLoggedUserCart();
    // console.log(response)
    //  console.log(data)
    setCartDetails( data);
    // console.log(data)
    
     
  }

  useEffect(() => {
    getCart();
  }, []);


 async function updateCount (id , count){
    const {data} = await updateProductQuantity(id ,count)
   
    setCartDetails(data)
  }

  async function deleteCart(){
    await clearAllCart()
   setCartDetails({
    numOfCartItems: 0,
    data: {
      totalCartPrice: 0,
      products: [],
    },
  });
    
  }
 return (
  <>
    {cartDetails ? (
      <div className="bg-slate-950 p-6">
        <h1 className="text-4xl text-white font-bold text-center mb-6 p-14">Shopping Cart</h1>
        <h2 className="text-white text-3xl p-2" >Cart Items: {cartDetails.numOfCartItems}</h2>
        <h3 className="text-white  text-3xl p-2">Total Price: {cartDetails.data.totalCartPrice} EGP</h3>
        {cartDetails.data.products.map((product) => (
          <div key={product.product.id} className="my-4 p-4 container  bg-slate-800 shadow rounded-md flex justify-around items-center">
            <div>
               <img src={product.product.imageCover} alt={product.product.title} className="text-white w-full md:w-48 h-48 object-cover"/>
             <h3 className="text-xl font-bold text-white">{product.product.title.split(' ').slice(0, 2).join(' ')}</h3>
              <h4 className="text-lg text-gray-600 text-white font-bold">Price: {product.price} EGP</h4>
           </div>

          

              <div className="flex items-center mt-4">
                   <div>
                     <p className="text-white m-4 text-lg">  Count</p>
                  </div>

                <button onClick={()=>updateCount( product.product.id, product.count+1 )} className="px-4 py-2 bg-gray-200 rounded-l-md">+</button>
                <span className=" border-r-2 px-4 py-2 border-t border-b bg-white">{product.count}</span>
                <button onClick={()=> updateCount( product.product.id, product.count-1 )} className="px-4 py-2 bg-gray-200 rounded-r-md">-</button>
              </div>

            <div className="flex item-center gap-x-4">
                <FaTrashCan  onClick={()=> removeItem(product.product.id)} className="cursor-pointer text-red-800" size={40} />
                <p className="text-white text-lg">Remove</p> 
            </div>
           <div>
             
           </div>
          </div>
        ))}
        
      <div className="flex justify-center gap-x-5"> 
        <Link to={`/address`} className="w-96 rounded bg-gray-800 p-3 text-white text-center hover:bg-slate-600 ">Online Payment </Link>
        <Link className="w-96 rounded  bg-gray-800  p-3 text-white text-center     hover:bg-slate-600  ">Cash On Delivery Payment </Link>
      </div>


      </div>
    ) : (
        <div className="flex items-center justify-center h-screen bg-gray-950">
          <ColorRing
            visible={true}
            height="180"
            width="180"
            ariaLabel="color-ring-loading"
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />

           
        </div>
    )}
   <button onClick={  deleteCart } className= "bg-gray-800 w-full p-5 text-2xl font-bold hover:bg-slate-600  text-white mb-5 "> Clear cart </button>
  </>
);


};

export default Cart;



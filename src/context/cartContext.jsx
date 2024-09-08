import axios from "axios";
import { func } from "prop-types";
import { createContext, useEffect, useState } from "react";

// Create a context for cart
export const cartContext = createContext();

export function CartContextProvider(props) {
const [cartId , setCartId]= useState(null)



  // Set headers with the token from localStorage
   const headers = {
    token: localStorage.getItem('userToken'),
  };

  // Function to add a product to the cart
   function addToCart(productId) {
    
      return axios.post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { productId },
        { headers }
      ).then((response)=>response)
       .catch ((err)=>err)
      
    
      
  }


 function getLoggedUserCart() {
  const headers = {
    token: localStorage.getItem('userToken'),
  };

  return axios.get('https://ecommerce.routemisr.com/api/v1/cart', { headers })
    .then((response) => response)   
    .catch((e) => e);  
    
}

   
   function removeCartItem(productId){

    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{ headers })
     .then((response)=> response)
     .catch((err)=> err)
   }
   

function updateProductQuantity (productId , count){
 
  return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {count },
        {headers},
       )
        .then((res)=> res)  
        .catch((err)=> err)
 }
 
    
    function clearAllCart(){
      return axios.delete('https://ecommerce.routemisr.com/api/v1/cart',
        {headers},
      )
    }


function onlinePayment (cartId , url, values){
 
  return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,
        {
          shippingAddress : values 
         },
        {headers},
       )
        .then((res)=> res)  
        .catch((err)=> err)
 }

 async function getCart( ) {
  const {data} = await getLoggedUserCart()
  setCartId(data?.data._id)
  // console.log(data)
 }

 useEffect(()=>{
  getCart()
 },[]);

  return (
    <cartContext.Provider value={{ addToCart,  getLoggedUserCart , removeCartItem , updateProductQuantity ,clearAllCart , onlinePayment , cartId}}>
      {props.children}
    </cartContext.Provider>
  );
}
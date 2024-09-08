
import axios from 'axios';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { FcRating } from "react-icons/fc";
import { MdProductionQuantityLimits } from 'react-icons/md';
import { ColorRing } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/cartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './search';
const FeaturedProducts = () => {
  const { addToCart } = useContext(cartContext);

  // Function to handle adding a product to the cart
  async function addProductToCart(productId) {
    try {
      const response = await addToCart(productId);

      if (response.data.status === 'success') {
        toast.success("Product is added successfully", {
          autoClose: 3000,
        });
      } else {
        toast.error("Cannot add the product to the cart", {
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("An error occurred while adding the product to the cart", {
        autoClose: 3000,
      });
      console.log(error);
    }
  }

  // Function to fetch featured products
  function getFeaturedProducts() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products')
      .then(response => response.data.data);
  }

  // Use React Query to fetch products
  const { data, isLoading, isError, error } = useQuery('featuredProducts', getFeaturedProducts);

  return (
    <div className="bg-slate-900  pb-5 ">
      <SearchBar/>
      <h2 className="text-2xl font-bold mb-4 text-center text-white p-3">
        Featured Products
      </h2>
      {isLoading ? (
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
      ) : (
        <div className="flex flex-wrap gap-9 justify-center">
          {Array.isArray(data) && data.map((product) => (
            <div key={product.id} className="group w-72 h-auto bg-gray-800 shadow-lg rounded-lg p-4 border border-transparent hover:border-indigo-100 transition duration-300">
              <Link to={`/productdetails/${product.id}`}>
                <img
                  src={product.imageCover}
                  alt={product.title}
                  className="w-full h-72 mb-4"
                />
                <h2 className="text-xl text-white font-semibold mb-2">
                  {product.title.split(" ").slice(0, 3).join(" ")}
                </h2>
                <p className="text-white mb-2 font-bold">${product.price}</p>
                <p className="text-white truncate">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="flex text-white p-3 items-center gap-2 font-bold">
                    {product.ratingsQuantity} <MdProductionQuantityLimits size={23} />
                  </span>
                  <span className="flex text-white p-3 items-center gap-2 font-bold">
                    {product.ratingsAverage} <FcRating size={23} />
                  </span>
                </div>
              </Link>
              <button
                onClick={() => addProductToCart(product.id)}
                className="bg-indigo-600 w-full text-white py-2 px-4 rounded mt-4 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out"
              >
                Add To Cart
              </button>
            </div>
          ))}

           
           
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default FeaturedProducts;




// import {useSelector} from "react-redux"
// import { increment , decrement } from "../Redux/counterSlice";
// import { useDispatch } from "react-redux";

// const Products = () => {
//    let {counter}= useSelector((state)=> state.counter);
//    const dispatch = useDispatch();

//   return <div className="p-28">
    
//       <div className='bg-red-400'>
//     count : {counter}
//     </div>
//     <button onClick={()=> dispatch(increment())} className="border-t-green-600 p-5 bg-green-700 rounded " >
//        increase
//     </button>
//     <button onClick={()=> dispatch(decrement())} className="border-t-green-600 p-5 bg-green-700 rounded " >
//        decrease 
//     </button>


//   </div>;
// };

// export default Products;

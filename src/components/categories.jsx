import axios from 'axios';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import { FcRating } from "react-icons/fc";
import { MdProductionQuantityLimits } from 'react-icons/md';
import { ColorRing } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Categories = () => {
  

   

  // Function to fetch featured products
  function getCategories() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
      .then(response => response.data.data);
  }

  // Use React Query to fetch products
  const { data, isLoading, isError, error } = useQuery('featuredProducts', getCategories);
// console.log(data)
  return (
    <div className="bg-slate-900">
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
        <div  className="flex flex-wrap gap-9 justify-center pb-5">
          {Array.isArray(data) && data.map((product , index) => (
            <div key={index} className="group w-72 h-auto bg-gray-800 shadow-lg rounded-lg p-4 border border-transparent hover:border-indigo-100 transition duration-300">
              
                <img
                  src={product.image}
                  alt={product.id}
                  className="w-full h-72 mb-4"
                />
                <h2 className="text-xl text-white font-semibold mb-2">
                  {product.name}
                </h2>
                
                
         
            
            </div>
          ))}

         
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default Categories;

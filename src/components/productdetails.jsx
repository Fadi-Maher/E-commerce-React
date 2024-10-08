import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import { FcRating } from "react-icons/fc";
import { MdProductionQuantityLimits } from "react-icons/md";
import { Helmet } from "react-helmet";
import { cartContext } from "../context/cartContext";
import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";

const ProductDetails = () => {
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

  const params = useParams();

  function getProductDetails(id) {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }

  const { data, isError, isLoading } = useQuery('productDetails', () => getProductDetails(params.id));

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen p-5 bg-gray-100">
        <div className="loader">
          <ColorRing
            visible={true}
            height="180"
            width="180"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-red-500">Error fetching product details. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-start px-4 py-8 md:py-20 bg-slate-900 min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data?.data?.data?.title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="w-full md:w-1/2 lg:w-1/3 h-full flex justify-center items-start mb-8 md:mb-0">
        <img
          src={data?.data?.data?.imageCover}
          alt={data?.data?.data?.title}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'top' }} // Ensures image is positioned from the top
        />
      </div>

      <div className="flex flex-col justify-center text-center md:text-left md:ml-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-8">{data?.data?.data?.title}</h1>

        <p className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-8">Price: ${data?.data?.data?.price}</p>

        <p className="text-white font-bold mb-8">{data?.data?.data?.description}</p>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mb-8">
          <div className="text-white text-xl md:text-2xl font-bold flex items-center gap-2">
            {data?.data?.data?.ratingsAverage}<FcRating size={25} />
          </div>
          <div className="text-white text-xl md:text-2xl font-bold flex items-center gap-2">
            {data?.data?.data?.ratingsQuantity} <MdProductionQuantityLimits size={25} />
          </div>
        </div>

        <button
          onClick={() => addProductToCart(data?.data?.data?.id)}
          className="bg-indigo-600 text-white w-full md:w-auto p-4 rounded hover:bg-indigo-700 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductDetails;

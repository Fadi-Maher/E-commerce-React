 import axios from "axios"
 import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { ColorRing } from "react-loader-spinner"
import { FcRating } from "react-icons/fc"
import { MdProductionQuantityLimits } from "react-icons/md"
import {Helmet} from "react-helmet";
import { cartContext } from "../context/cartContext"
import { useContext } from "react"
import { toast , ToastContainer} from "react-toastify"


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
//     const [productDetails, setProductDetails] = useState(null)
 
//   async  function getProductDetails(id){
//       const {data} =await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
//        setProductDetails(data)
//       console.log(data)
//     }
//     useEffect(()=>{
//         getProductDetails(params.id)

//     }, [])
function  getProductDetails(id){
   return  axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
     
}

const {data , isError , isLoading } = useQuery('productDetails', ()=> getProductDetails(params.id))

// console.log(data?.data.data)
     


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
     
            

        <div className="flex justify-center items-center  px-20 py-20 pt-32 gap-20 bg-slate-900" >
        
          <Helmet>
                <meta charSet="utf-8" />
                <title>{data?.data?.data?.title}</title>
                <link rel="canonical" href="http://mysite.com/example" />
             </Helmet>

        <div className="w-96 ">
            <img
            src={data?.data?.data?.imageCover}
            alt={data?.data?.data?.title}
            className="   "
            />
        </div>

        <div  >

        <h1 className="text-3xl font-bold text-white mb-8 ">{data?.data?.data?.title}</h1>

        <p className="text-2xl font-semibold text-white mb-8">price: ${data?.data?.data?.price}</p>


        <p className="text-white font-bold mb-14">{data?.data?.data?.description}</p>

     
                
        <div className="flex   items-center justify-between   ">
                <div className=" text-white text-2xl font-bold mr-2 flex justify-end items-center gap-2 "> {data?.data?.data?.ratingsAverage}<FcRating size={25}/> </div>

                <div className="text-white text-2xl font-bold flex gap-2  items-center">
                {data?.data?.data?.ratingsQuantity} <MdProductionQuantityLimits size={25}/>
                </div>

        </div>      
             
              <button   onClick={() => addProductToCart(data?.data?.data?.id)}className="bg-indigo-600 text-white  w-full p-4  rounded hover:bg-indigo-700 transition duration-300 mt-16">
                Add to Cart
              </button>
            
       </div>
   <ToastContainer/>
    </div>
    
    
  );
}

export default ProductDetails

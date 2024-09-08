 import axios from "axios"
import { useEffect } from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { ColorRing } from "react-loader-spinner"
import { FcRating } from "react-icons/fc"
import { MdProductionQuantityLimits } from "react-icons/md"
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom"

const BrandsDetails = () => {

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
   return  axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
     
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
     
          

        <div className="flex justify-center items-center p-28  bg-slate-900" >
     
          <Helmet>
                <meta charSet="utf-8" />
                <title>{data?.data?.data?.title}</title>
                <link rel="canonical" href="http://mysite.com/example" />
             </Helmet>
  
        <div className="w-96">
            <img
            src={data?.data?.data?.image}
            alt={data?.data?.data?.name}
            className="   "
            />
        </div>

          <div>

        

        <p className="text-2xl font-semibold text-white mb-4"> {data?.data?.data?.name}</p>

  
       </div>
 
    </div>
    
    
  );
}

export default BrandsDetails

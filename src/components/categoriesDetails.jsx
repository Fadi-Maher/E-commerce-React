//  import axios from "axios"
// // import { useEffect } from "react"
// import { useQuery } from "react-query"
// import { useParams } from "react-router-dom"
// import { ColorRing } from "react-loader-spinner"
// import { FcRating } from "react-icons/fc"
// import { MdProductionQuantityLimits } from "react-icons/md"
// import {Helmet} from "react-helmet";


// const CategoriesDetails = () => {

//     const params = useParams();
// //     const [productDetails, setProductDetails] = useState(null)
 
// //   async  function getProductDetails(id){
// //       const {data} =await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
// //        setProductDetails(data)
// //       console.log(data)
// //     }
// //     useEffect(()=>{
// //         getProductDetails(params.id)

// //     }, [])
// function  getProductDetails(id){
//    return  axios.get(`https://ecommerce.routemisr.com/api/v1/category/${id}/ `)
     
// }

// const {data , isError , isLoading } = useQuery('productDetails', ()=> getProductDetails(params.id))

// console.log(data?.data.data)
     


//    if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen p-5 bg-gray-100">
//         <div className="loader">
//           <ColorRing
//           visible={true}
//           height="180"
//           width="180"
//           ariaLabel="color-ring-loading"
//           wrapperStyle={{}}
//           wrapperClass="color-ring-wrapper"
//           colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
//         />
//         </div>
//       </div>
//     );
//   }

//   if (isError) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <p className="text-red-500">Error fetching product details. Please try again later.</p>
//       </div>
//     );
//   }

//   return (
     
            

//         <div className="flex justify-center items-center  gap-20 bg-slate-900" >
        
//           <Helmet>
//                 <meta charSet="utf-8" />
//                 <title>{data?.data?.data?.title}</title>
//                 <link rel="canonical" href="http://mysite.com/example" />
//              </Helmet>

//         <div className="w-96">
//             {/* <img
//             src={data?.data?.data?.imageCover}
//             alt={data?.data?.data?.title}
//             className="   "
//             /> */}
//         </div>

//             <div>
//         <h1 className="text-3xl font-bold text-white mb-4">{data?.data?.data?.name}</h1>

//         <p className="text-2xl font-semibold text-white mb-4">price: ${data?.data?.data?.price}</p>


//         <p className="text-white font-bold mb-4">{data?.data?.data?.description}</p>

     
                
//         <div className="flex   items-center justify-between mb-10">
//                 <div className=" text-white text-2xl font-bold mr-2 flex justify-end items-center gap-2 "> {data?.data?.data?.ratingsAverage}<FcRating size={25}/> </div>

//                 <div className="text-white text-2xl font-bold flex gap-2  items-center">
//                 {data?.data?.data?.ratingsQuantity} <MdProductionQuantityLimits size={25}/>
//                 </div>

//         </div>      
             
//               <button className="bg-indigo-600 text-white w-full p-4  rounded hover:bg-indigo-700 transition duration-300">
//                 Add to Cart
//               </button>
            
//        </div>

//     </div>
    
    
//   );
// }

// export default CategoriesDetails

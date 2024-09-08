import {useFormik} from 'formik'
import { useContext } from 'react'
import { cartContext } from '../context/cartContext'
 


function Address() {
const {onlinePayment , cartId} = useContext(cartContext)

  async  function handleSubmitAddress ( values){
        const response = await onlinePayment( cartId , 'http://localhost:5173', values)
        // console.log(response.data.session.url)
        window.location.href=response.data.session.url;
      }

    const formik = useFormik({
        initialValues: {
            details: '',   
            phone: '',
            city: '',
        },
        onSubmit : handleSubmitAddress
    })

  return (
    <div className='pt-32  pb-20 flex justify-center bg-slate-950 '>
    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4 p-10 container bg-slate-800 text-white text-2xl  '>
                                        <h2 className='text-center text-4xl font-bold'>Enter Required Data</h2>
        <label>Details:</label>
        <input className='text-black' type="text" name="details" value={formik.values.details} onChange={formik.handleChange}/>

        <label>phone:</label>
        <input className='text-black' type="text" name="phone" value={formik.values.phone} onChange={formik.handleChange}/>

        <label>city:</label>
        <input className='text-black' type="text" name="city" value={formik.values.city} onChange={formik.handleChange}/>

        <button type='submit' className='bg-slate-800 font-bold text-white mt-5 p-4 border hover:bg-slate-700'> Pay now</button>
      </form>
     
      
    </div>
  )
}

export default Address

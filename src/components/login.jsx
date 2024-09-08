import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/userContext';
import { useContext } from 'react';
 
const Login = () => {
  const { setUserToken , userToken} = useContext(userContext); // Destructuring setUserToken
  const navigate = useNavigate();

  const submitLogin = async (values) => {
    try {
     
      let response = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values);
 
      if (response.data.message === 'success') {
        
      const token = response.data.token;
        // console.log(token)
        localStorage.setItem('userToken', token);

         
        setUserToken(token);

         
        navigate("/");
      } else {
        console.error('Form submission failed, no success message received.');
      }
    } catch (error) {
      console.error("Error during login", error);
    }
  }; 

  // Initialize Formik with validation schema
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    validateOnChange: true,
    onSubmit: submitLogin,
  });

  return (
    <div className=" w-96 m-auto p-4 border  mt-10  ">
      <h1 className="text-2xl font-bold mb-3">Login</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4  mt-10">
        {/* Email Field */}
        <div className=' '>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className={`p-3 w-full ${!(formik.isValid && formik.dirty) ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500'} text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

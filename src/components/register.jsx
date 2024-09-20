import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();  

  const submitRegister = async (values) => {
    try {
      let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values);

      if (data.message === 'success') {
        navigate('/login'); 
      } else {
        console.error('Form submission failed, no success message received.');
      }
    } catch (error) {
      console.error("Error during registration", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
      rePassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required')
        .min(3, 'Minimum is 3 characters')
        .max(10, 'Max characters is 10'),
      phone: Yup.string().required('Phone number is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
      rePassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    validateOnChange: true,
    onSubmit: submitRegister,
  });

  return (
    <div  style={{height:600}} className="flex justify-center items-center  h-screen bg-gray-900">
      <div className="max-w-md w-full mx-auto p-6 border bg-gray-800 rounded-lg shadow-lg">
        <form onSubmit={formik.handleSubmit} className="space-y-4 ">
          <h1 className="text-2xl font-bold text-white mb-4 text-center">Register</h1>

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-500 text-sm">{formik.errors.phone}</div>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
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
            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
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

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="rePassword" className="block text-sm font-medium text-white">Confirm Password</label>
            <input
              id="rePassword"
              name="rePassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rePassword}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
            {formik.touched.rePassword && formik.errors.rePassword && (
              <div className="text-red-500 text-sm">{formik.errors.rePassword}</div>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className={`p-3 w-full ${!(formik.isValid && formik.dirty) ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500'} text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

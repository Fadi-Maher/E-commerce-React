import { Link } from 'react-router-dom';
 import { useContext } from 'react';
import { userContext } from '../context/userContext';
import { useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
 
 import ProfileImage from './profileImg';
 


const Navbar = () => {
  
  const { userToken ,setUserToken } = useContext(userContext);
 
   let navigate = useNavigate()

  function logOut(){
    setUserToken(null);
    localStorage.removeItem('userToken')
    navigate('/login')

  }
  return (
    <div>
      {userToken !== null ? (
        <nav className="bg-slate-900 items-center fixed top-0 w-full z-10 shadow">
          <div className="mx-auto max-w-7xl px-1 sm:px-6 lg:px-4 items-center ml-0">
            <div className="  flex h-16 items-center justify-between">
              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-2">
                    <Link
                      to="/"
                      className="rounded-md no-underline px-3 py-2 text-lg font-medium text-white hover:bg-gray-700"
                      aria-current="page"
                    >
                      <FaCartArrowDown size={25} />
                    </Link>

                    <Link
                      to="/"
                      className="rounded-md no-underline px-3 py-2 text-lg font-medium text-white hover:bg-gray-700"
                      aria-current="page"
                    >
                      Home  
                    </Link>
   
                    <Link
                      to="/products"
                      className="rounded-md no-underline px-3 py-2 text-lg  font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Products
                    </Link>

                    <Link
                      to="/brands"
                      className="rounded-md no-underline px-3 py-2 text-lg  font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Brands
                    </Link>

                    <Link
                      to="/cart"
                      className="rounded-md no-underline px-3 py-2 text-lg  font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Cart
                    </Link>

                    <Link
                      to="/categories"
                      className="rounded-md no-underline px-3 py-2 text-lg  font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Categories
                    </Link>

                       


                    </div>
                      </div>
                      </div>
                     
                      <div className="ml-auto">
                        <button
                          onClick={()=>logOut()}
                          className="rounded-md no-underline px-3 py-2 text-lg  font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          LogOut
                        </button>
                    </div>
                    
                  
                    <Link
                      to="/profile"
                      className="rounded-md no-underline px-3 py-2 text-lg  font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                    < ProfileImage/>
                    </Link>
               
             
            </div>
            
        
          </div>
        </nav>
      ) : (
        <div className="bg-gray-800 items-center p-5">
          <Link
            to="/login"
            className="rounded-md no-underline px-3 py-2 text-lg  font-medium text-gray-300 hover:bg-gray-700 hover:text-white  "
          >
            Login
          </Link>

          <Link
            to="/register"
            className="   rounded-md no-underline px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Register
          </Link>
       
         
          </div>

      )}
     
    </div>
  );
};

export default Navbar;

import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { userContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { FaCartArrowDown, FaBars, FaTimes } from 'react-icons/fa';
import ProfileImage from './profileImg';

const Navbar = () => {
  const { userToken, setUserToken } = useContext(userContext);
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  function logOut() {
    setUserToken(null);
    localStorage.removeItem('userToken');
    navigate('/login');
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-900 fixed top-0 w-full z-10 shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white text-lg font-medium flex items-center">
                <FaCartArrowDown size={25} />
              </Link>
            </div>
            <div className="hidden sm:flex sm:space-x-4 ml-6">
              <Link
                to="/"
                className="text-white px-3 py-2 text-lg font-medium hover:bg-gray-700 rounded-md"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-gray-300 px-3 py-2 text-lg font-medium hover:bg-gray-700 hover:text-white rounded-md"
              >
                Products
              </Link>
              <Link
                to="/brands"
                className="text-gray-300 px-3 py-2 text-lg font-medium hover:bg-gray-700 hover:text-white rounded-md"
              >
                Brands
              </Link>
              <Link
                to="/cart"
                className="text-gray-300 px-3 py-2 text-lg font-medium hover:bg-gray-700 hover:text-white rounded-md"
              >
                Cart
              </Link>
              <Link
                to="/categories"
                className="text-gray-300 px-3 py-2 text-lg font-medium hover:bg-gray-700 hover:text-white rounded-md"
              >
                Categories
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4 ml-auto">
            {userToken !== null ? (
              <>
                <button
                  onClick={logOut}
                  className="text-gray-300 px-3 py-2 text-lg font-medium hover:bg-gray-700 rounded-md"
                >
                  LogOut
                </button>
                <Link
                  to="/profile"
                  className="text-gray-300 px-3 py-2 text-lg font-medium hover:bg-gray-700 rounded-md"
                >
                  <ProfileImage />
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-300 px-3 py-2 text-lg font-medium hover:bg-gray-700 rounded-md"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-gray-300 px-3 py-2 text-lg font-medium hover:bg-gray-700 rounded-md"
                >
                  Register
                </Link>
              </>
            )}
          </div>
          <div className="flex sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-300 px-3 py-2 text-lg font-medium hover:bg-gray-700 rounded-md"
            >
              {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-slate-900 bg-opacity-75 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden`}>
        <div className="flex flex-col items-center justify-center h-full p-4 space-y-4">
          <Link
            to="/"
            className="text-white px-3 py-2 text-lg font-medium hover:bg-gray-700 rounded-md"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-gray-300 px-3 py-2 text-lg font-medium hover:bg-gray-700 hover:text-white rounded-md"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            to="/brands"
            className="text-gray-300 px-3 py-2 text-lg font-medium hover:bg-gray-700 hover:text-white rounded-md"
            onClick={toggleMenu}
          >
            Brands
          </Link>
          <Link
            to="/cart"
            className="text-gray-300 px-3 py-2 text-lg font-medium hover:bg-gray-700 hover:text-white rounded-md"
            onClick={toggleMenu}
          >
            Cart
          </Link>
          <Link
            to="/categories"
            className="text-gray-300 px-3 py-2 text-lg font-medium hover:bg-gray-700 hover:text-white rounded-md"
            onClick={toggleMenu}
          >
            Categories
          </Link>
          {userToken !== null ? (
            <>
              <button
                onClick={logOut}
                className="text-gray-300 px-3 py-2 text-lg font-medium hover:bg-gray-700 rounded-md"
              >
                LogOut
              </button>
              <Link
                to="/profile"
                className="text-gray-300 px-3 py-2 text-lg font-medium hover:bg-gray-700 rounded-md"
              >
                <ProfileImage />
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-300 px-3 py-2 text-lg font-medium hover:bg-gray-700 rounded-md"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-gray-300 px-3 py-2 text-lg font-medium hover:bg-gray-700 rounded-md"
                onClick={toggleMenu}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

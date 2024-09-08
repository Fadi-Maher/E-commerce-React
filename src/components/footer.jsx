 import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 border    relative bottom-0 w-full  ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div  >
            <h1 className="text-3xl font-bold mb-2">Clever Store</h1>
            <p className="text-sm">
              Providing the best products for you with a touch of excellence.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-6 mb-6 md:mb-0">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About Us</Link>
            <Link to="/services" className="hover:underline">Services</Link>
            <Link to="/contact" className="hover:underline">Contact Us</Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CleverStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

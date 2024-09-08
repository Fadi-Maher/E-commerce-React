import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  // Fetch products
  function getProducts() {
    return axios
      .get('https://ecommerce.routemisr.com/api/v1/products')
      .then((res) => res.data.data)
      .catch((err) => {
        console.error('Error fetching products:', err);
        throw err;
      });
  }

  const { data: products  , isLoading, isError } = useQuery('getProducts', getProducts);

//   console.log('Products:', products); // 

  const filteredProducts = products?.filter((product) => {
    // console.log('Product:', product);  
    
    return product.title.toLowerCase().includes(query.toLowerCase());
  }) || [];

//   console.log('Filtered Products:', filteredProducts);  

  // Handle input change
  const handleInputChange = (e) => {
    const newQuery = e.target.value.trim();  
    setQuery(newQuery);
  };

  return (
    <div className="fixed text-black w-56 top-3 right-96 z-50">
      <input
        type="text"
        className="p-2 border border-gray-300 rounded w-full"
        placeholder="Search for products..."
        value={query}
        onChange={handleInputChange}
      />
      {query && filteredProducts.length > 0 && (
        <div className="relative bg-white text-black  mt-2 rounded shadow-lg z-2">
          <ul>
            {filteredProducts.map((product) => (
              <li key={product.id} className="py-2 hover:bg-gray-100">
                <Link
                  to={`/productDetails/${product.id}`}
                  className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  {product.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {isLoading && <div className="text-center mt-2">Loading...</div>}
      {isError && <div className="text-center mt-2">Error loading products</div>}
    </div>
  );
};

export default SearchBar;
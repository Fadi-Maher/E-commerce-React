import { useEffect } from "react";
import { fetchBrands } from "../Redux/BrandSlice";
import { useDispatch, useSelector } from "react-redux";
import { ColorRing } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Brands = () => {
  const { brands, loading, isError } = useSelector((state) => state.brands);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-20">
      {loading && (
        <div className="text-3xl font-bold text-center flex justify-center items-center">
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
      )}
      
      {!loading && isError && (
        <div className="text-3xl font-bold text-center">
          <p>Failed to load brands. Please try again later.</p>
        </div>
      )}
      
      {!loading && !isError && (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {brands.map((data, index) => (
          <Link key={index} to={`/brandsDetails/${data._id}`}>
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:bg-gray-700 transition duration-300 justify-center items-center">
                <h1 className="text-xl font-semibold mb-4 text-white">{data.name}</h1>
                <img className="text-xl font-semibold mb-4 text-white" src={data.image} alt={data.name} />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Brands;

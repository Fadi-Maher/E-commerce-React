import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ColorRing } from "react-loader-spinner";
const CategorySlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    customPaging: (i) => (
      <button
        style={{
          width: '20px', // Adjust width
          height: '20px', // Adjust height
          borderRadius: '50%', // Make it round
          backgroundColor: 'gray', // Inactive dot color
          margin: '0 ', // Space between dots
          border: 'none',
          
           
        }}
        className="focus:outline-none"
      ></button>
    ),
    appendDots: (dots) => (
      <ul
        style={{ bottom: '-30px' }} // Adjust position
        className="slick-dots"
      >
        {dots.map((dot, index) => (
          <li key={index} className="inline-block mx-1">
            {dot}
          </li>
        ))}
      </ul>
    ),
  };
  const fetchCategory = async () => {
    try {
      return await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
      
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const { data, isError, isLoading } = useQuery('categorySlider', fetchCategory);
// console.log(data?.data.data)
  if (isLoading) {

    return  <div   className="flex justify-center"><ColorRing
  
            visible={true}
            height="180"
            width="180"
            ariaLabel="color-ring-loading"
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />;
          </div> 
  }

  if (isError) {
    return <div>Error fetching categories</div>;
  }

  return (
    <div className="bg-white py-6 m-11">
       {data?.data?.data && (
        <Slider {...settings}>
          {data?.data.data.map((category) => (
          <div  key={category._id} >
              <img style={{height:200}}   src={category.image} alt={category.name} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default CategorySlider;

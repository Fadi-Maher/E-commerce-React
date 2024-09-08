 
import Slider from "react-slick";


function MainSlider() {
 
     const  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

 
  return (
    <div className='  m-11'>
         <h1 className="text-2xl  text-slate-600 md:text-6xl font-bold mb-4 font-serif relative top-48 text-center z-50 ">Welcome to Our Store</h1>
         <p className="  text-slate-600  text-xl font-bold mb-4 font-serif relative top-52 text-center  z-50 ">Discover the best products with unbeatable prices</p>
        <Slider {...settings}>


       <img
  style={{
    width: '100%',
    height: 'auto',
    maxWidth: '1000px', 
    display: 'block',
    margin: '0 auto',  
  }}
  src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=600https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&  "
  alt="Smiling Caucasian Brunette"
/>

       <img
  style={{
    width: '100%',
    height: 'auto',
    maxWidth: '1000px', 
    display: 'block',
    margin: '0 auto',  
  }}
  src="https://images.pexels.com/photos/4968386/pexels-photo-4968386.jpeg?auto=compress&cs=tinysrgb&w=600"
  alt="Smiling  "
/>


          <img
  style={{
    width: '100%',
    height: 'auto',
    maxWidth: '1000px', 
    display: 'block',
    margin: '0 auto',  
  }}
  src="https://media.istockphoto.com/id/1194523752/photo/smiling-positive-caucasian-brunette-sitting-in-her-fashion-studio-and-using-tablet.jpg?s=1024x1024&w=is&k=20&c=NIn_6hvF7DbmogYA2Wo5C50zDSL8ac-AhiR9VNLiZfo="
  alt="Smiling Caucasian "
/>

<img
  style={{
    width: '100%',
    height: 'auto',
    maxWidth: '1000px',  
    display: 'block',
    margin: '0 auto',  
  }}
  src="https://media.istockphoto.com/id/1467976868/photo/the-convenience-of-shopping-online.jpg?s=1024x1024&w=is&k=20&c=TW1sWVSVTo-GtbD7tLz3IO98v_JUJWqAnbgMrjtKLfs=
  "
  alt="Woman showing "
/>

<img
  style={{
    width: '100%',
    height: 'auto',
    maxWidth: '1000px', 
    display: 'block',
    margin: '0 auto',  
  }}
  src="https://images.pexels.com/photos/7309322/pexels-photo-7309322.jpeg?auto=compress&cs=tinysrgb&w=600https://images.pexels.com/photos/7309322/pexels-photo-7309322.jpeg?auto=compress&cs=tinysrgb&w=600https://images.pexels.com/photos/7309322/pexels-photo-7309322.jpeg?auto=compress&cs=tinysrgb&w=600"
  alt="Successful s "
/>

        </Slider>
    </div>
  )
}

export default MainSlider

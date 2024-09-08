import CategorySlider from "./categorySlider";
import FeaturedProducts from "./featuredProducts";
import MainSlider from "./mianSlider";
import {Helmet} from "react-helmet";



const Home = () => {
  
  return (
    <div className="bg-slate-950   ">
      
        <Helmet>
                <meta charSet="utf-8" />
                <title>fresh cart</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
     
       
        <MainSlider/>
      
        <CategorySlider/>
        
        <FeaturedProducts />
       
    </div>
  );
};

export default Home;

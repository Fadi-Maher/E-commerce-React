import Navbar from "./navbar";
import Footer from "./footer";
import { QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
// import { useEffect, useContext } from "react";
// import { userContext } from "../context/userContext";
import { Offline } from "react-detect-offline";
import { CiWifiOff } from "react-icons/ci";
import { QueryClient } from "react-query";


const queryClient = new QueryClient();

const Layout = () => {
   
// const { setUserToken } = useContext(userContext);

  // useEffect(() => {

  //   const token = localStorage.getItem('userToken'); 
  //   if (token)  {
  //     setUserToken(token);
  //     // console.log(token)
  //   }
  // }, [ ]); 
  return (
    <QueryClientProvider client={queryClient}>
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
        
        
        {/* <Offline  > 
        <div className="text-white text-2xl text-center flex justify-center items-center gap-6 p-11 "> 
                 <i><CiWifiOff  size={30}/> </i> you are offline please check your network 
        </div> 
        
        </Offline> */}
      
    </div>
    </QueryClientProvider>
  );
};

export default Layout;

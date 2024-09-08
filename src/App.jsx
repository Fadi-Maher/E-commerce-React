import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './components/cart';
import Categories from './components/categories';
import Home from './components/home';
import Layout from './components/layout';
import Login from './components/login';
import Register from './components/register';
import Products from './components/products';
import NotFound from './components/notFound';
import Brands from './components/brands';
import ProductDetails from './components/productDetails';
import {Provider} from "react-redux"
import { store } from './Redux/store';
import ProtectedRoute from './components/protectedRoute';
  import { CartContextProvider } from './context/cartContext';
import UserContextProvider from './context/userContext';
import Profile from './components/profile';
import BrandsDetails from './components/brandsDetails';
import Address from './components/address';
import Orders from './components/orders';
import { Offline } from 'react-detect-offline';
import { RiWifiOffLine } from "react-icons/ri";
// import Counter from './practice/useRef';
// import CategoriesDetails from './components/categoriesDetails';
// import { useContext, useEffect } from 'react';
// import { userContext } from './context/userContext';
 

 
  let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path:"" , element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "cart", element:<ProtectedRoute ><Cart /></ProtectedRoute>  },
      { path: "allorders", element:<ProtectedRoute ><Orders /></ProtectedRoute>  },
      { path: "categories", element:<ProtectedRoute> <Categories /></ProtectedRoute> },
      { path: "products", element:<ProtectedRoute> <Products /> </ProtectedRoute>},
      { path: "profile", element:<ProtectedRoute> <Profile /> </ProtectedRoute>},
      // { path: "useRef", element:<ProtectedRoute> <Counter /> </ProtectedRoute>},
      { path: "brands", element:<ProtectedRoute><Brands /></ProtectedRoute>  },
      { path: "address", element:<ProtectedRoute><Address/></ProtectedRoute>  },
      { path: "brandsDetails/:id", element:<ProtectedRoute><BrandsDetails /></ProtectedRoute>  },
      // { path: "categoriesDetails/:id/subcategories", element:<ProtectedRoute><CategoriesDetails /></ProtectedRoute>  },
      {  path: "productdetails/:id",  element: <ProtectedRoute><ProductDetails /></ProtectedRoute>},
       { path: "*", element: <NotFound /> }
    ]
  }
]);

function App() {
  // const { setUserToken } = useContext(userContext);

  // useEffect(() => {
  //   const token = localStorage.getItem('userToken');
  //   if (token) {
  //     setUserToken(token);
  //   }
  // }, [setUserToken]);

  return (
    
    
    <div className='bg-slate-950' >
 
<CartContextProvider>
  <UserContextProvider> 
    
    <Provider store={store}>
      <RouterProvider router={routers} />
    </Provider>

   
               
     <Offline>
       <div
          className='fixed bg-red-600 text-2xl p-3 text-white bottom-3 left-1 rounded flex justify-center items-center gap-5 font-bold'> 
              <RiWifiOffLine />
           
           Only shown when you are online !
       </div>
     </Offline>
         
  
    </UserContextProvider> 
</CartContextProvider>
</div>

     
  );
}

export default App;


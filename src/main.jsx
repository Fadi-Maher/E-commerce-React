 import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 import {QueryClient , QueryClientProvider} from 'react-query'
import '@fortawesome/fontawesome-free/css/all.min.css';
 import { CartContextProvider } from './context/cartContext.jsx';
import UserContextProvider from './context/userContext.jsx';
import { Offline } from 'react-detect-offline';

let queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
 <QueryClientProvider client={queryClient}>
          <App />
         
 </QueryClientProvider>
)

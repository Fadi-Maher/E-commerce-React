import   { createContext, useState } from "react";
export const userContext = createContext();


 
export default function UserContextProvider({children}) {
  const [userToken, setUserToken] = useState( localStorage.getItem('userToken'));
 

  return (
    <userContext.Provider value={{ userToken, setUserToken }}>
      {children}
    </userContext.Provider>
  );
}

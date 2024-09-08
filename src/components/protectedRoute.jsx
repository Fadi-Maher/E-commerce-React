import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../context/userContext';

const ProtectedRoute = ({ children }) => {
  const { userToken } = useContext(userContext);
// console.log(userToken)
  if (!userToken) {
    //  console.log(userToken)
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;

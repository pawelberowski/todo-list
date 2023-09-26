import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ isAllowed, children }) => {
  console.log(isAllowed);
  if (!isAllowed) {
    return <Navigate to="/todos" />;
  }
  return children;
};

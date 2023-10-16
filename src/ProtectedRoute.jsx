import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ isAllowed, children }) => {
  if (!isAllowed) {
    return <Navigate to="/todos" />;
  }
  return children;
};

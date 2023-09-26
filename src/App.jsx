import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { TodoList } from './TodoList/TodoList.jsx';
import { TodoDetails } from './TodoDetails/TodoDetails.jsx';
import { useEffect, useState } from 'react';
import { ProtectedRoute } from './ProtectedRoute.jsx';

export const App = () => {
  const userId = 1;
  const [isAdmin, setIsAdmin] = useState(false);

  if (userId === 1) {
    localStorage.setItem('isAdmin', JSON.stringify(true));
  } else {
    localStorage.setItem('isAdmin', JSON.stringify(false));
  }

  useEffect(() => {
    const isAdmin = JSON.parse(localStorage.getItem('isAdmin'));
    if (isAdmin) {
      setIsAdmin(isAdmin);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/todos" element={<TodoList userId={userId} />} />
          <Route
            path="/todos/:id"
            element={
              <ProtectedRoute isAllowed={isAdmin}>
                <TodoDetails />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { TodoList } from './TodoList/TodoList.jsx';
import { TodoDetails } from './TodoDetails/TodoDetails.jsx';

export const App = () => {
  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/todos" element={<TodoList />} />
          <Route path="/todos/:id" element={<TodoDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { TodoList } from './TodoList/TodoList.jsx';
import { TodoDetails } from './TodoDetails/TodoDetails.jsx';
import { AddTask } from './TodoList/AddTask/AddTask.jsx';

export const App = () => {
  const userId = 1;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/todos" element={<TodoList userId={userId} />} />
          <Route path="/todos/:id" element={<TodoDetails />} />
          <Route path="/addtask" element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

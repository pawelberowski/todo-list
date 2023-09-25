import { useFetchedTodos } from './useFetchedTodos.jsx';
import { List } from '@mui/material';
import { TodoTile } from './TodoTile/TodoTile.jsx';
import { AddTaskButton } from './AddTaskButton/AddTaskButton.jsx';
import { useNavigate } from 'react-router-dom';

export const TodoList = ({ userId }) => {
  const { todos, isLoading } = useFetchedTodos(userId);

  let navigate = useNavigate();
  const handleAddTask = () => {
    navigate('/addtask');
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div>
          <AddTaskButton onClick={handleAddTask}></AddTaskButton>
          <h2>To do</h2>
          <List>
            {todos.map(
              (todo) =>
                !todo.completed && (
                  <TodoTile key={todo.id} title={todo.title} todoId={todo.id} />
                ),
            )}
          </List>
          <List>
            <h2>Done</h2>
            {todos.map(
              (todo) =>
                todo.completed && (
                  <TodoTile key={todo.id} title={todo.title} todoId={todo.id} />
                ),
            )}
          </List>
        </div>
      )}
    </div>
  );
};

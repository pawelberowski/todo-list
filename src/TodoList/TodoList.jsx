import { useFetchedTodos } from './useFetchedTodos.jsx';
import { List } from '@mui/material';
import { TodoTile } from '../TodoTile/TodoTile.jsx';

export const TodoList = () => {
  const { todos, isLoading } = useFetchedTodos();

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div>
          <h2>To do</h2>
          <List>
            {todos.map(
              (todo) =>
                !todo.completed && (
                  <TodoTile key={todo.id} title={todo.title} />
                ),
            )}
          </List>
          <List>
            <h2>Done</h2>
            {todos.map(
              (todo) =>
                todo.completed && <TodoTile key={todo.id} title={todo.title} />,
            )}
          </List>
        </div>
      )}
    </div>
  );
};
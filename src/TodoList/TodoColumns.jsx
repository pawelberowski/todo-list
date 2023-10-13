import { TodoTile } from './TodoTile/TodoTile.jsx';
import { List } from '@mui/material';

export const TodoColumns = ({ todos, setTodos }) => {
  const notDoneTodos = todos.filter((todo) => !todo.isCompleted);
  const doneTodos = todos.filter((todo) => todo.isCompleted);
  return (
    <div className="lists-wrapper">
      <List>
        <h2>To do</h2>
        {notDoneTodos.map((todo) => (
          <TodoTile
            key={todo.id}
            title={todo.title}
            todoId={todo.id}
            todos={todos}
            setTodos={setTodos}
            todoStatus={todo.isCompleted}
            color={'success'}
          />
        ))}
      </List>
      <List>
        <h2>Done</h2>
        {doneTodos.map((todo) => (
          <TodoTile
            key={todo.id}
            title={todo.title}
            todoId={todo.id}
            todos={todos}
            setTodos={setTodos}
            todoStatus={todo.isCompleted}
          />
        ))}
      </List>
    </div>
  );
};

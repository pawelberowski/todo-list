import { IconButton, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

export const TodoTile = ({ title, todoId, todos, setTodos }) => {
  const handleClick = () => {
    const newTodos = [
      ...todos.filter((todo) => {
        return todo.id !== todoId;
      }),
    ];
    setTodos(newTodos);
  };

  return (
    <ListItem>
      <div>
        <Link to={`/todos/${todoId}`}>{title}</Link>
        <IconButton aria-label="delete" onClick={handleClick}>
          <DeleteIcon />
        </IconButton>
      </div>
    </ListItem>
  );
};

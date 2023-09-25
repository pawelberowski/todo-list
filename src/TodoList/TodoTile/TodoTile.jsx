import { ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

export const TodoTile = ({ title, todoId }) => {
  return (
    <ListItem>
      <div>
        <Link to={`/todos/${todoId}`}>{title}</Link>
      </div>
    </ListItem>
  );
};

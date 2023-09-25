import { ListItem } from '@mui/material';

export const TodoTile = ({ title }) => {
  return (
    <ListItem>
      <div>
        <h3>{title}</h3>
      </div>
    </ListItem>
  );
};

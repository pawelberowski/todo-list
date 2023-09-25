import { Button } from '@mui/material';

export const AddTaskButton = ({ onClick }) => {
  return (
    <Button variant={'contained'} onClick={onClick}>
      Add new task
    </Button>
  );
};

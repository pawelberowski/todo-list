import { Button, Stack } from '@mui/material';

export const AddTask = ({ handleTitleChange, handleSubmit }) => {
  return (
    <div>
      <h2>Add New Task</h2>
      <input placeholder="Task title" onChange={handleTitleChange} />
      <Stack direction="row" spacing={2}>
        <Button variant={'contained'} onClick={handleSubmit}>
          Submit
        </Button>
      </Stack>
    </div>
  );
};

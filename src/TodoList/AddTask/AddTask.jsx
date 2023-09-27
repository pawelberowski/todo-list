import { Button } from '@mui/material';

export const AddTask = ({ handleTitleChange, handleSubmit }) => {
  return (
    <div className="add-task">
      <h2>Add New Task:</h2>
      <input placeholder="Task title" onChange={handleTitleChange} />
      <Button variant={'contained'} onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

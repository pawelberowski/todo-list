import { Button } from '@mui/material';

export const AddTask = ({
  handleTitleChange,
  handleDescriptionChange,
  handleSubmit,
}) => {
  return (
    <div className="add-task">
      <h2>Add New Task:</h2>
      <input placeholder="Task title" onChange={handleTitleChange} />
      <input
        placeholder="Optional description"
        onChange={handleDescriptionChange}
      />
      <Button variant={'contained'} onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

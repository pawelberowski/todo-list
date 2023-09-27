import { IconButton, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { Link } from 'react-router-dom';
import { deleteTask } from '../DeleteTask/deleteTask.jsx';
import { changeStatus } from '../ChangeStatus/changeStatus.jsx';

export const TodoTile = ({
  title,
  todoId,
  todos,
  setTodos,
  color,
  todoStatus,
}) => {
  const handleChangeStatus = () => {
    const newStatus = !todoStatus;
    changeStatus(todoId, newStatus).then(() => {
      const newTodos = [
        ...todos.map((todo) => {
          if (todo.id === todoId) {
            todo.completed = newStatus;
          }
          return todo;
        }),
      ];
      setTodos(newTodos);
    });
  };
  const handleDelete = () => {
    deleteTask(todoId).then(() => {
      const newTodos = [
        ...todos.filter((todo) => {
          return todo.id !== todoId;
        }),
      ];
      setTodos(newTodos);
    });
  };

  return (
    <ListItem>
      <div>
        <Link className="task-title" to={`/todos/${todoId}`}>
          {title}
        </Link>
        <IconButton onClick={handleChangeStatus}>
          <AssignmentTurnedInIcon color={color} />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
    </ListItem>
  );
};

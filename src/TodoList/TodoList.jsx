import { useFetchedTodos } from './useFetchedTodos.jsx';
import { useState } from 'react';
import { postNewTask } from './AddTask/postNewTask.jsx';
import { AddTask } from './AddTask/AddTask.jsx';
import { TodoColumns } from './TodoColumns.jsx';

export const TodoList = () => {
  const { todos, setTodos, isLoading } = useFetchedTodos();
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState(null);
  const handleTitleChange = (event) => {
    setTaskTitle(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  };
  const handleSubmit = () => {
    postNewTask(taskTitle, taskDescription).then((newTask) => {
      if (!taskTitle) {
        return;
      }
      setTodos([newTask, ...todos]);
    });
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div>
          <AddTask
            handleTitleChange={handleTitleChange}
            handleDescriptionChange={handleDescriptionChange}
            handleSubmit={handleSubmit}
          />
          <TodoColumns todos={todos} setTodos={setTodos} />
        </div>
      )}
    </div>
  );
};

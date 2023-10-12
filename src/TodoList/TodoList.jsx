import { useFetchedTodos } from './useFetchedTodos.jsx';
import { List } from '@mui/material';
import { TodoTile } from './TodoTile/TodoTile.jsx';
import { useState } from 'react';
import { postNewTask } from './AddTask/postNewTask.jsx';
import { AddTask } from './AddTask/AddTask.jsx';

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
          <div className="lists-wrapper">
            <List>
              <h2>To do</h2>
              {todos.map(
                (todo) =>
                  !todo.completed && (
                    <TodoTile
                      key={todo.id}
                      title={todo.title}
                      todoId={todo.id}
                      todos={todos}
                      setTodos={setTodos}
                      todoStatus={todo.completed}
                      color={'success'}
                    />
                  ),
              )}
            </List>
            <List>
              <h2>Done</h2>
              {todos.map(
                (todo) =>
                  todo.completed && (
                    <TodoTile
                      key={todo.id}
                      title={todo.title}
                      todoId={todo.id}
                      todos={todos}
                      setTodos={setTodos}
                      todoStatus={todo.completed}
                    />
                  ),
              )}
            </List>
          </div>
        </div>
      )}
    </div>
  );
};

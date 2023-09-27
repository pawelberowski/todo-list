import { useFetchedTodos } from './useFetchedTodos.jsx';
import { List } from '@mui/material';
import { TodoTile } from './TodoTile/TodoTile.jsx';
import { useState } from 'react';
import { postNewTask } from './AddTask/postNewTask.jsx';
import { AddTask } from './AddTask/AddTask.jsx';

export const TodoList = ({ userId }) => {
  const { todos, setTodos, isLoading } = useFetchedTodos(userId);
  const [taskTitle, setTaskTitle] = useState('');

  const handleTitleChange = (event) => {
    setTaskTitle(event.target.value);
  };
  const handleSubmit = () => {
    postNewTask(userId, taskTitle).then((newTask) => {
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
            handleSubmit={handleSubmit}
          />
          <h2>To do</h2>
          <List>
            {todos.map(
              (todo) =>
                !todo.completed && (
                  <TodoTile
                    key={todo.id}
                    title={todo.title}
                    todoId={todo.id}
                    todos={todos}
                    setTodos={setTodos}
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
                  />
                ),
            )}
          </List>
        </div>
      )}
    </div>
  );
};

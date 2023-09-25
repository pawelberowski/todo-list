import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GoBackButton } from '../GoBackButton/GoBackButton.jsx';

export const TodoDetails = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [id]);

  return (
    <div>
      {todo && (
        <>
          <h2>{`Task:${todo.title}`}</h2>
          <p>{todo.completed ? 'Done' : 'In progress'}</p>
          <GoBackButton />
        </>
      )}
    </div>
  );
};

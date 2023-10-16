import { useEffect, useState } from 'react';

export function useFetchedTodos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_API_URL}/tasks`)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [todos]);

  return {
    todos,
    setTodos,
    isLoading,
  };
}

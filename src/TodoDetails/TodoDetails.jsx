import { useParams } from 'react-router-dom';

export const TodoDetails = () => {
  const { id } = useParams();
  return <div>TodoDetails:{id}</div>;
};

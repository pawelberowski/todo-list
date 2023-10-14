import {TodoColumn} from "./TodoColumn/TodoColumn.jsx";

export const TodoColumns = ({ todos, setTodos }) => {
  const notDoneTodos = todos.filter((todo) => !todo.isCompleted);
  const doneTodos = todos.filter((todo) => todo.isCompleted);
  return (
    <div className="lists-wrapper">
      <TodoColumn
        todos={notDoneTodos}
        setTodos={setTodos}
        label={'To do'}
        color={'success'}
      />
      <TodoColumn
        todos={doneTodos}
        setTodos={setTodos}
        label={'Done'}
      />
    </div>
  );
};

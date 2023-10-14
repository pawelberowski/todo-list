import {TodoTile} from "../../TodoTile/TodoTile.jsx";
import {List} from "@mui/material";

export const TodoColumn = ({todos, setTodos, label, color}) => {
  return (
    <List>
      <h2>{label}</h2>
      {todos.map((todo) => (
        <TodoTile
          key={todo.id}
          title={todo.title}
          todoId={todo.id}
          todos={todos}
          setTodos={setTodos}
          todoStatus={todo.isCompleted}
          color={color}
        />
      ))}
    </List>
  )
}
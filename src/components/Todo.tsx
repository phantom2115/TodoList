import { TodoType } from "../types/todo";
import Button from "./Button";
interface TodoProps {
  todo: TodoType;
  deleteTodo: (id: TodoType["id"]) => void;
  toggleTodo: (todo: TodoType) => void;
}
const Todo = ({ todo, deleteTodo, toggleTodo }: TodoProps) => {
  return (
    <div>
      <div
        className={`flex justify-between items-center gap-5 rounded-md ${
          todo.isDone ? "bg-blue-100" : "bg-gray-50 "
        } px-3`}
      >
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => {
            toggleTodo(todo);
          }}
        />
        <div className="flex flex-col w-full py-2">
          <span
            className={`text font-semibold text-blue-300 ${
              todo.isDone && "text-decoration-line: line-through"
            }`}
          >
            {todo.title}
          </span>
          <span
            className={`${todo.isDone && "text-decoration-line: line-through"}`}
          >
            {todo.content}
          </span>
        </div>
        <Button
          type="button"
          className="text-red-500 hover:text-red-700"
          onClick={() => deleteTodo(todo.id)}
        >
          삭제
        </Button>
      </div>
    </div>
  );
};

export default Todo;

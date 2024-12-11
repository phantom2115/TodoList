import Input from "../components/Input";
import Button from "../components/Button";
import Todo from "../components/Todo";
import { useEffect, useState } from "react";
import { TodoType } from "../types/todo";

const TodoPage = () => {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoContent, setTodoContent] = useState<string>("");
  const [todos, setTodos] = useState<TodoType[]>(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    const newTodo = {
      id: crypto.randomUUID(),
      title: todoTitle,
      content: todoContent,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTodoTitle("");
    setTodoContent("");
  };

  const deleteTodo = (id: TodoType["id"]) => {
    setTodos(
      todos.filter((todo) => {
        return id !== todo.id;
      })
    );
  };

  const toggleTodo = (selectedTodo: TodoType) => {
    const updatedTodo = { ...selectedTodo, isDone: !selectedTodo.isDone };
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== selectedTodo.id;
      }),
      updatedTodo,
    ]);
  };

  return (
    <main className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="p-12 bg-white flex flex-col gap-4 rounded-2xl shadow-md">
        <h1 className="font-semibold text-3xl text-blue-500">To Do List</h1>
        <section className="flex flex-col gap-2 overflow-scroll max-h-[400px]">
          <h2 className="font-semibold text-lg text-gray-500">할 일</h2>
          {todos
            .filter((todo) => !todo.isDone)
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />
            ))}
          <h2 className="font-semibold text-lg text-gray-500">완료</h2>
          {todos
            .filter((todo) => todo.isDone)
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />
            ))}
        </section>
        <section
          onSubmit={(event) => {
            event.preventDefault();
            addTodo();
          }}
        >
          <form className="grid grid-cols-[1fr,2fr,0.5fr] gap-2">
            <Input
              placeholder="제목"
              value={todoTitle}
              setValue={setTodoTitle}
            />
            <Input
              placeholder="내용"
              value={todoContent}
              setValue={setTodoContent}
            />
            <Button
              type={"submit"}
              className="text-white bg-blue-400 hover:bg-blue-500"
            >
              추가
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default TodoPage;

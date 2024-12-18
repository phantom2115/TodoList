import Input from "../components/Input";
import Button from "../components/Button";
import Todo from "../components/Todo";
import { useEffect, useRef, useState } from "react";
import { TodoType } from "../types/todo";

const TodoPage = () => {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoContent, setTodoContent] = useState<string>("");
  const [todos, setTodos] = useState<TodoType[]>(
    JSON.parse(localStorage.getItem("todos") || "[]")
  );

  const titleInputRef = useRef<HTMLInputElement | null>(null);

  const focusInput = () => {
    titleInputRef.current?.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!todoTitle) {
      return alert("제목을 입력해주세요");
    }
    if (!todoContent) {
      return alert("내용을 입력해주세요");
    }
    const newTodo = {
      id: crypto.randomUUID(),
      title: todoTitle,
      content: todoContent,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTodoTitle("");
    setTodoContent("");
    focusInput();
  };

  const deleteTodo = (id: TodoType["id"]) => {
    setTodos(
      todos.filter((todo) => {
        return id !== todo.id;
      })
    );
    focusInput();
  };

  const toggleTodo = (selectedTodo: TodoType) => {
    const updatedTodo = { ...selectedTodo, isDone: !selectedTodo.isDone };
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== selectedTodo.id;
      }),
      updatedTodo,
    ]);
    titleInputRef.current?.focus();
  };

  const doneTodos = todos.filter((todo) => todo.isDone);
  const undoneTodos = todos.filter((todo) => !todo.isDone);

  return (
    <main className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="p-12 bg-white flex flex-col gap-4 rounded-2xl shadow-md">
        <h1 className="font-semibold text-3xl text-blue-500">To Do List</h1>
        <section className="flex flex-col gap-2 overflow-scroll max-h-[400px]">
          {undoneTodos.length !== 0 ? (
            <h2 className="font-semibold text-lg text-gray-500">할 일</h2>
          ) : (
            <></>
          )}
          {undoneTodos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))}
          {doneTodos.length !== 0 ? (
            <h2 className="font-semibold text-lg text-gray-500">완료</h2>
          ) : (
            <></>
          )}
          {doneTodos.map((todo) => (
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
          <form className="grid grid-cols-[2fr,4fr,1fr] gap-2">
            <Input
              placeholder="제목"
              value={todoTitle}
              setValue={setTodoTitle}
              maxLength={10}
              ref={titleInputRef}
            />
            <Input
              placeholder="내용"
              value={todoContent}
              setValue={setTodoContent}
              maxLength={40}
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

import Input from "../components/Input";
import Button from "../components/Button";
import Todo from "../components/Todo";

const TodoPage = () => {
  return (
    <main className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="p-12 bg-white flex flex-col gap-4 rounded-2xl shadow-md">
        <h1 className="font-semibold text-3xl text-blue-500">To Do List</h1>
        <section className="flex flex-col gap-2 overflow-scroll max-h-[400px]">
          <h2 className="font-semibold text-lg text-gray-500">할 일</h2>
          <Todo />
          <h2 className="font-semibold text-lg text-gray-500">완료</h2>
          <Todo />
        </section>
        <section>
          <form className="grid grid-cols-[1fr,2fr,0.5fr] gap-2">
            <Input placeholder="제목" />
            <Input placeholder="내용" />
            <Button className="text-white bg-blue-400 hover:bg-blue-500">
              추가
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default TodoPage;

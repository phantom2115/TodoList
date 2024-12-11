import Button from "./Button";
interface TodoProps {}
const Todo = ({}: TodoProps) => {
  return (
    <div>
      <div className="flex justify-between gap-5 rounded-md bg-gray-50 bg-blue-100 px-3">
        <input type="checkbox" />
        <div className="flex flex-col w-full py-2">
          <span className="text font-semibold text-blue-300 text-decoration-line: line-through">
            title
          </span>
          <span className="text-decoration-line: line-through">content</span>
        </div>
        <Button className="text-red-500 hover:text-red-700">삭제</Button>
      </div>
    </div>
  );
};

export default Todo;

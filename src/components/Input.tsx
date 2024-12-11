interface InputProps {
  placeholder: string;
}
const Input = ({ placeholder }: InputProps) => {
  return (
    <input
      className={`shrink-0 pl-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-1 `}
      placeholder={placeholder}
    />
  );
};

export default Input;

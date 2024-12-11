interface InputProps {
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
const Input = ({ placeholder, value, setValue }: InputProps) => {
  return (
    <input
      className={`shrink-0 pl-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-1 `}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default Input;

import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  ref?: React.MutableRefObject<null>;
}
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ setValue, ...props }: InputProps, ref) => {
    return (
      <input
        className={`shrink-0 pl-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-1 `}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;

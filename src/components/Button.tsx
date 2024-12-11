import { ComponentProps } from "react";

const Button = ({
  type,
  className,
  onClick,
  children,
}: ComponentProps<"button">) => {
  return (
    <button
      type={type}
      className={`shrink-0 px-7 py-2 rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

interface ButtonProps {
  children: string;
  className: string;
}
const Button = ({ className, children }: ButtonProps) => {
  return (
    <button className={`shrink-0 px-7 py-2 rounded-md ${className}`}>
      {children}
    </button>
  );
};

export default Button;

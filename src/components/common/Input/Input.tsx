import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={`bg-white rounded-xl w-full px-3 py-2 border border-secondary-alpha-10 focus:outline-border-variant-2 font-medium text-sm placeholder:text-neutral-400 text-color-1000 ${props.className ?? ""}`}
    />
  );
});

export default Input;

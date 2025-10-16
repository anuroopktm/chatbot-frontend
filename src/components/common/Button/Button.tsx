type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  iconPosition?: "start" | "end";
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
  iconClassName?: string;
};

const Button = ({
  label,
  iconPosition = "start",
  icon: Icon,
  className = "",
  iconClassName = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`bg-primary-1000 cursor-pointer active:shadow-drop-400 rounded-xl px-4 py-2 font-medium text-base text-brand-on-brand flex items-center justify-center ${className}`}
    >
      {Icon && iconPosition === "start" && (
        <Icon className={`mr-2 ${iconClassName}`} />
      )}
      {label}
      {Icon && iconPosition === "end" && (
        <Icon className={`ml-2 ${iconClassName}`} />
      )}
    </button>
  );
};

export default Button;

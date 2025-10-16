interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: React.FC<TextareaProps> = (props) => {
  return (
    <textarea
      {...props}
      className={`bg-white rounded-xl px-3 py-2 border border-secondary-alpha-10 focus:outline-border-variant-2 font-medium text-sm placeholder:text-neutral-400 text-color-1000 resize-none ${props.className ?? ""}`}
    />
  );
};

export default Textarea;

import { ReactComponent as ChevronLeftIcon } from "@/assets/actions/chevron-left.svg?react";

interface ChatBotOptionProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  handleOption: () => void;
}

const ChatBotOption = ({
  icon: Icon,
  title,
  handleOption,
}: ChatBotOptionProps) => {
  return (
    <div
      onClick={handleOption}
      className="border hover:bg-brand-primary-light transition-colors duration-200 cursor-pointer border-border-variant-1 shadow-drop-400 rounded-xl p-2.5 flex items-center gap-2.5"
    >
      <div className="w-10 h-10 rounded-md flex justify-center items-center bg-brand-primary-light">
        <Icon className="w-5 h-5" />
      </div>
      <h6 className="text-neutral-primary font-semibold text-sm grow">
        {title}
      </h6>
      <ChevronLeftIcon className="w-6 h-6" />
    </div>
  );
};

export default ChatBotOption;

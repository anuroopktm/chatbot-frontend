import { ReactComponent as ChevronDown } from "@/assets/actions/chevron-down.svg?react";
import { useState } from "react";

type Props = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

const Accordion = ({
  icon: Icon,
  title,
  children,
  defaultOpen = false,
}: Props) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="shadow-e3">
      <div className="rounded-[10px] overflow-hidden bg-white border border-border-variant-1 shadow-drop-400">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex gap-2.5 items-center w-full bg-primary-1000 px-4 py-2 cursor-pointer select-none"
        >
          <Icon />
          <h6 className="text-brand-on-brand font-medium text-base grow text-left">
            {title}
          </h6>
          <ChevronDown
            className={`transition-transform duration-500 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        <div
          className={`transition-opacity duration-200 overflow-hidden ${
            isOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;

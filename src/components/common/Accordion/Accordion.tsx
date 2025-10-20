import { ReactComponent as ChevronDown } from "@/assets/actions/chevron-down.svg?react";

type Props = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  children: React.ReactNode;
};

const Accordion = ({ icon: Icon, title, children }: Props) => {
  return (
    <div className="shadow-e3">
      <details
        open
        className="group rounded-xl overflow-hidden bg-white border border-border-variant-1 shadow-drop-400"
      >
        <summary className="flex gap-2.5 items-center w-full bg-primary-1000 px-4 py-2 cursor-pointer select-none">
          <Icon />
          <h6 className="text-brand-on-brand font-medium text-base grow text-left">
            {title}
          </h6>
          <ChevronDown className="transition-transform duration-500 rotate-0 group-open:rotate-180" />
        </summary>
        <div className="overflow-hidden max-h-0 opacity-0 group-open:max-h-full group-open:opacity-100 transition-all duration-500 ease-in-out">
          {children}
        </div>
      </details>
    </div>
  );
};

export default Accordion;

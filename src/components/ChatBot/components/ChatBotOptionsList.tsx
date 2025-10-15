import { ReactComponent as ClockIcon } from "@/assets/sections/clock.svg?react";
import { ReactComponent as ConversationIcon } from "@/assets/sections/conversation.svg?react";
import { ReactComponent as SupportIcon } from "@/assets/sections/support.svg?react";
import { ReactComponent as TicketIcon } from "@/assets/sections/ticket.svg?react";
import { useViewStore, type ChatView } from "@/context/ViewContext";
import ChatBotOption from "./ChatBotOption";

const options: {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  key: ChatView;
}[] = [
  {
    icon: ConversationIcon,
    title: "Ask a question to Katy",
    key: "ASK_QUESTION",
  },
  { icon: SupportIcon, title: "Smart Support", key: "SMART_SUPPORT" },
  {
    icon: ClockIcon,
    title: "Conversation History",
    key: "CONVERSATION_HISTORY",
  },
  { icon: TicketIcon, title: "IT Helpdesk Tickets", key: "HELPDESK_TICKETS" },
];

const ChatBotOptionsList = () => {
  const { setView } = useViewStore();

  const handleOption = (key: ChatView) => setView(key);

  return (
    <div className="px-5 pt-2.5 pb-5">
      <p className="text-neutral-primary font-normal text-sm">
        Here are some things we can help you find :
      </p>
      <div className="flex flex-col gap-2.5 mt-2.5">
        {options.map((opt) => (
          <ChatBotOption
            key={opt.key}
            icon={opt.icon}
            title={opt.title}
            handleOption={() => handleOption(opt.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatBotOptionsList;

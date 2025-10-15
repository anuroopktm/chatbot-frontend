import ChatBotHeader from "../ChatBot/components/ChatBotHeader";

type Props = { onClose: () => void; children: React.ReactNode };

const ChatLayout = ({ onClose, children }: Props) => {
  return (
    <div className="flex flex-col absolute bottom-5 right-5 w-[400px] h-[560px] border border-border-variant-1 shadow-drop-400 rounded-xl overflow-hidden">
      <ChatBotHeader onClose={onClose} />
      {children}
    </div>
  );
};

export default ChatLayout;

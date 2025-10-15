import { ReactComponent as CloseSquareIcon } from "@/assets/actions/close-square.svg?react";
import { ReactComponent as RefreshSquareIcon } from "@/assets/actions/refresh-square.svg?react";
import { ReactComponent as LogoIcon } from "@/assets/branding/logo.svg?react";
import { useViewStore } from "@/context/ViewContext";

const ChatBotHeader = ({ onClose }: { onClose: () => void }) => {
  const { setView } = useViewStore();

  const handleResetView = () => setView("MAIN_MENU");

  return (
    <div className="bg-brand-primary-light p-5 flex items-center">
      <div className="flex justify-items-start grow">
        <LogoIcon className="h-6 w-fit" />
      </div>
      <div className="flex items-center gap-2.5">
        <RefreshSquareIcon
          onClick={handleResetView}
          className="cursor-pointer hover:scale-105 transition-transform duration-200"
        />
        <CloseSquareIcon
          className="cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default ChatBotHeader;

import { useViewStore } from "@/context/ViewContext";
import ChatLayout from "../ChatLayout/ChatLayout";
import MessagingView from "../MessagingView/MessagingView";
import ChatBotIntro from "./components/ChatBotIntro";
import ChatBotOptionsList from "./components/ChatBotOptionsList";

const ChatBot = ({ onClose }: { onClose: () => void }) => {
  const { view } = useViewStore();

  return (
    <ChatLayout onClose={onClose}>
      {view === "MAIN_MENU" && (
        <>
          <ChatBotIntro />
          <ChatBotOptionsList />
        </>
      )}
      {view === "ASK_QUESTION" && <MessagingView />}
    </ChatLayout>
  );
};

export default ChatBot;

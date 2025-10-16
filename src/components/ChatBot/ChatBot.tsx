import { useViewStore } from "@/context/ViewContext";
import ChatLayout from "../ChatLayout/ChatLayout";
import ConversationHistory from "../ConversationHistory/ConversationHistory";
import MessagingView from "../MessagingView/MessagingView";
import PastTickets from "../PastTickets/PastTickets";
import TicketSummary from "../TicketSummary/TicketSummary";
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
      {view === "CONVERSATION_HISTORY" && <ConversationHistory />}
      {view === "HELPDESK_TICKETS" && (
        <div className="p-2.5 space-y-2.5">
          <TicketSummary />
          <PastTickets />
        </div>
      )}
    </ChatLayout>
  );
};

export default ChatBot;

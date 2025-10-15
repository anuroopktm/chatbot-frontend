import AvatarImg from "@/assets/branding/avatar.png";
import { useState } from "react";
import ChatBot from "./components/ChatBot/ChatBot";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <div className="w-screen h-screen relative">
      {/* Floating Avatar Button */}
      {!isChatOpen && (
        <button
          onClick={toggleChat}
          className="absolute bottom-5 right-5 h-16 w-16 overflow-hidden rounded-full bg-brand-primary-light px-1 pt-2 cursor-pointer shadow-md hover:scale-105 transition-transform duration-200"
        >
          <img
            src={AvatarImg}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </button>
      )}

      {/* ChatBot Panel */}
      {isChatOpen && <ChatBot onClose={toggleChat} />}
    </div>
  );
}

export default App;

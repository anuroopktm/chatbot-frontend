import ChatFooter from "@/components/ChatFooter/ChatFooter";
import MessageInput from "@/components/common/MessageInput/MessageInput";
import AIMessage from "@/components/Message/AIMessage";
import UserMessage from "@/components/Message/UserMessage";
import type { Message } from "@/components/MessagingView/MessagingView";
import { useLayoutEffect, useRef } from "react";

const ConversationHistory = () => {
  const messages: Message[] = [
    {
      id: 1,
      sender: "ai",
      text: "Hello 👋! I’m ThoughtMinds Assistant. How can I help you today?",
      time: "24 Mar 2024, 10:00:12 AM",
    },
    {
      id: 2,
      sender: "user",
      text: "Hi! Can you tell me about ThoughtMinds?",
      time: "24 Mar 2024, 10:00:45 AM",
    },
    {
      id: 3,
      sender: "ai",
      text: "Sure! ThoughtMinds is an AI-driven customer support platform designed to automate and enhance business communication.",
      time: "24 Mar 2024, 10:01:02 AM",
    },
    {
      id: 4,
      sender: "user",
      text: "Interesting. What kind of businesses use it?",
      time: "24 Mar 2024, 10:01:30 AM",
    },
    {
      id: 5,
      sender: "ai",
      text: "It’s used by startups, SaaS companies, and enterprise teams for automating FAQs, lead management, and support ticketing.",
      time: "24 Mar 2024, 10:02:15 AM",
    },
    {
      id: 6,
      sender: "user",
      text: "Can I integrate it with my website?",
      time: "24 Mar 2024, 10:03:01 AM",
    },
    {
      id: 7,
      sender: "ai",
      text: "Yes! You can embed our chatbot widget directly using a simple JavaScript snippet or integrate it with React, Vue, or Angular projects.",
      time: "24 Mar 2024, 10:03:30 AM",
    },
    {
      id: 8,
      sender: "user",
      text: "Do you offer a free trial?",
      time: "24 Mar 2024, 10:04:02 AM",
    },
    {
      id: 9,
      sender: "ai",
      text: "Absolutely! We offer a 14-day free trial with full access to all premium features. No credit card required.",
      time: "24 Mar 2024, 10:04:35 AM",
    },
    {
      id: 10,
      sender: "user",
      text: "That’s great! What’s your pricing after the trial?",
      time: "24 Mar 2024, 10:05:12 AM",
    },
    {
      id: 11,
      sender: "ai",
      text: "We have three plans — Starter ($29/month), Professional ($79/month), and Enterprise (custom pricing).",
      time: "24 Mar 2024, 10:05:48 AM",
    },
    {
      id: 12,
      sender: "user",
      text: "Do you provide API access?",
      time: "24 Mar 2024, 10:06:15 AM",
    },
    {
      id: 13,
      sender: "ai",
      text: "Yes, our platform provides a RESTful API for sending, receiving, and managing chatbot conversations programmatically.",
      time: "24 Mar 2024, 10:06:47 AM",
    },
    {
      id: 14,
      sender: "user",
      text: "How secure is your API?",
      time: "24 Mar 2024, 10:07:09 AM",
    },
    {
      id: 15,
      sender: "ai",
      text: "We use HTTPS, token-based authentication, and AES-256 encryption for all data exchanges.",
      time: "24 Mar 2024, 10:07:40 AM",
    },
    {
      id: 16,
      sender: "user",
      text: "Can I get analytics on chat performance?",
      time: "24 Mar 2024, 10:08:12 AM",
    },
    {
      id: 17,
      sender: "ai",
      text: "Yes! You can track response rates, average resolution times, and customer satisfaction metrics on your dashboard.",
      time: "24 Mar 2024, 10:08:50 AM",
    },
    {
      id: 18,
      sender: "user",
      text: "Is ThoughtMinds only for English, or does it support multiple languages?",
      time: "24 Mar 2024, 10:09:15 AM",
    },
    {
      id: 19,
      sender: "ai",
      text: "We currently support 10+ languages including English, Spanish, Hindi, and German. You can configure it per chat instance.",
      time: "24 Mar 2024, 10:09:50 AM",
    },
    {
      id: 20,
      sender: "user",
      text: "Wow, that’s impressive! Can I get a demo link?",
      time: "24 Mar 2024, 10:10:10 AM",
    },
    {
      id: 21,
      sender: "ai",
      text: "Sure thing! You can try our live demo here: https://demo.thoughtminds.ai",
      time: "24 Mar 2024, 10:10:42 AM",
    },
    {
      id: 22,
      sender: "user",
      text: "Thanks, I’ll check that out!",
      time: "24 Mar 2024, 10:11:05 AM",
    },
    {
      id: 23,
      sender: "ai",
      text: "You’re welcome 😊! Would you like me to email you the setup guide as well?",
      time: "24 Mar 2024, 10:11:30 AM",
    },
    {
      id: 24,
      sender: "user",
      text: "Yes, please send it to my registered email.",
      time: "24 Mar 2024, 10:11:58 AM",
    },
    {
      id: 25,
      sender: "ai",
      text: "Got it! The setup guide has been sent. Is there anything else I can help you with today?",
      time: "24 Mar 2024, 10:12:21 AM",
    },
    {
      id: 26,
      sender: "user",
      text: "No, that’s all. Thanks a lot!",
      time: "24 Mar 2024, 10:12:45 AM",
    },
    {
      id: 27,
      sender: "ai",
      text: "Happy to help! Have a great day 🌟",
      time: "24 Mar 2024, 10:13:00 AM",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  useLayoutEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <div className="relative flex flex-col h-full p-2.5">
      <div className="flex-1 overflow-auto space-y-5 pb-[70px]" ref={scrollRef}>
        {messages.map((msg) =>
          msg.sender === "ai" ? (
            <AIMessage isDisabled={true} key={msg.id} message={msg} />
          ) : (
            <UserMessage key={msg.id} message={msg} />
          ),
        )}
      </div>
      <div className="sticky bottom-0 left-0 bg-white rounded-xl">
        <MessageInput isDisabled={true} />
        <ChatFooter />
      </div>
    </div>
  );
};

export default ConversationHistory;

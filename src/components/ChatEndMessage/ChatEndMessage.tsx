type Props = {
  type: "ticket" | "chat";
};

const ChatEndMessage = ({ type = "chat" }: Props) => {
  const textRender = {
    ticket: "Ticket submitted successfully",
    chat: "Thankyou for your feedback",
  };

  return (
    <div className="flex items-center">
      <div className="h-px bg-neutral-200 grow" />
      <p className="text-color-700 font-semibold text-xxs w-fit mx-1">
        {textRender[type]}
      </p>
      <div className="h-px bg-neutral-200 grow" />
    </div>
  );
};

export default ChatEndMessage;

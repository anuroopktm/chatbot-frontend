import type { Message } from "@/components/MessagingView/MessagingView";

const UserMessage = ({ message }: { message: Message }) => {
  return (
    <div className="flex flex-col gap-2 items-end">
      <div>
        <p className="p-2.5 bg-primary-100 rounded-xl text-color-1000 font-normal text-sm break-words">
          {message.text}
        </p>
      </div>
      <p className="text-neutral-700 font-normal text-xs">{message.time}</p>
    </div>
  );
};

export default UserMessage;

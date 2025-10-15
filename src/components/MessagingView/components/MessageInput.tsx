import { ReactComponent as SendIcon } from "@/assets/actions/send.svg?react";
import { useEffect, useRef, useState } from "react";

const MessageInput = () => {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto resize textarea height as user types
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value]);

  const handleSend = () => {
    if (!value.trim()) return;
    console.log("Sending:", value);
    setValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-end gap-2.5 p-2.5 rounded-xl outline outline-neutral-500 focus-within:outline-2">
      <textarea
        ref={textareaRef}
        rows={1}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Write your message..."
        className="grow resize-none bg-transparent focus:outline-none text-sm leading-5 max-h-20 overflow-auto"
      />
      <div className="h-5 flex justify-center items-center">
        <SendIcon
          className="cursor-pointer shrink-0 h-full w-full"
          onClick={handleSend}
        />
      </div>
    </div>
  );
};

export default MessageInput;

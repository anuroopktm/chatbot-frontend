import { ReactComponent as DislikeIcon } from "@/assets/actions/dislike.svg?react";
import { ReactComponent as LikeIcon } from "@/assets/actions/like.svg?react";
import AvatarImg from "@/assets/branding/avatar.png";
import FeedbackForm from "@/components/FeedbackForm/FeedbackForm";
import type { Message } from "@/components/MessagingView/MessagingView";
import RaiseTicketForm from "@/components/RaiseTicketForm/RaiseTicketForm";

type Props = {
  isDisabled: boolean;
  message: Message;
};

const AIMessage = ({ message, isDisabled }: Props) => {
  return (
    <>
      <div className="flex justify-start gap-2.5">
        <div className="bg-color-100 rounded-full h-9 w-9 overflow-hidden shrink-0">
          <img src={AvatarImg} alt="Avatar" className="w-full h-full mt-1" />
        </div>

        <div className="flex flex-col gap-2 grow">
          <div className="flex justify-start">
            <p className="p-2.5 bg-primary-1000 rounded-xl text-white font-normal text-sm break-words">
              {message.text}
            </p>
          </div>

          <div className="flex items-center gap-5 mx-2.5">
            <p className="text-neutral-700 font-normal text-xs grow">
              {message.time}
            </p>
            <LikeIcon
              className={`text-neutral-tertiary hover:scale-105 hover:text-primary-500 active:scale-125 transition-all duration-200 ${isDisabled ? "pointer-events-none" : "pointer-events-auto cursor-pointer"}`}
            />
            <DislikeIcon
              className={`text-neutral-tertiary hover:scale-105 hover:text-primary-500 active:scale-125 transition-all duration-200 ${isDisabled ? "pointer-events-none" : "pointer-events-auto cursor-pointer"}`}
            />
          </div>
          <RaiseTicketForm />
        </div>
      </div>
      <FeedbackForm />
    </>
  );
};

export default AIMessage;

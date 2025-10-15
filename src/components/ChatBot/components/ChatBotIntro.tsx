import AvatarImg from "@/assets/branding/avatar.png";

const ChatBotIntro = () => {
  return (
    <div className="bg-brand-primary-light pl-5 flex">
      <div>
        <h6 className="text-neutral-primary font-medium text-2xl">
          Hello, I'm Katy from ThoughtMinds👋
        </h6>
        <p className="text-neutral-primary font-normal text-sm mt-2 mb-4.5">
          I'd love to answer your questions about our people-driven tech-enabled
          services for customer experience.
        </p>
      </div>
      <div className="shrink-0 flex items-end">
        <img className="w-full h-fit" src={AvatarImg} alt="Avatar" />
      </div>
    </div>
  );
};

export default ChatBotIntro;

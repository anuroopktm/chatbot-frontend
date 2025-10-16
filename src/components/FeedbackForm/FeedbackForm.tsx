import { ReactComponent as ArrowRightIcon } from "@/assets/actions/arrow-right.svg?react";
import { ReactComponent as CloseIcon } from "@/assets/actions/close.svg?react";
import { useLayoutEffect, useState } from "react";
import Button from "../common/Button/Button";
import Textarea from "../common/Textarea/Textarea";

const FeedbackForm = () => {
  const [open, setOpen] = useState<boolean>(false);

  useLayoutEffect(() => {
    const messageRef = document.getElementById("message-container");
    messageRef?.scrollTo({
      top: messageRef.scrollHeight,
      behavior: "smooth",
    });
  }, [open]);

  const feedbackTypes = [
    "Unhelpful Response",
    "Incorrect Information",
    "Didn’t Address my Issue",
    "Not Responsive",
  ];

  const handleClose = () => setOpen(false);

  if (open) return null;

  return (
    <div className="flex flex-col gap-2.5 p-2.5 rounded-xl bg-white border border-neutral-200 shadow-e3">
      <div className="flex items-center justify-between">
        <h6 className="text-color-1000 font-semibold text-sm">
          Thankyou for your honest feedback
        </h6>
        <CloseIcon
          className="cursor-pointer hover:scale-105"
          onClick={handleClose}
        />
      </div>
      <p className="text-neutral-700 font-normal text-xs max-w-4/5">
        What changes could we make to provide better answers or information?
      </p>
      <div className="flex gap-2.5 flex-wrap mt-1">
        {feedbackTypes.map((type) => (
          <span
            key={type}
            className="cursor-pointer border border-border-variant-2 bg-white hover:bg-neutral-500 px-3 py-2 rounded-xl text-neutral-primary hover:text-white font-medium text-xs"
          >
            {type}
          </span>
        ))}
      </div>
      <Textarea
        className="mt-1"
        rows={4}
        placeholder="Provide feedback (Optional)"
        required
        minLength={10}
      />
      <div className="flex justify-end">
        <Button
          label="Submit"
          className="w-fit"
          icon={ArrowRightIcon}
          iconPosition="end"
          type="submit"
        />
      </div>
    </div>
  );
};

export default FeedbackForm;

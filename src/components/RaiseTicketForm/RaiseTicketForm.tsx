import { ReactComponent as ArrowRightIcon } from "@/assets/actions/arrow-right.svg?react";
import { ReactComponent as CloseIcon } from "@/assets/actions/close.svg?react";
import { ReactComponent as TicketIcon } from "@/assets/actions/ticket.svg?react";
import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";
import Textarea from "@/components/common/Textarea/Textarea";
import { useLayoutEffect, useState } from "react";

const RaiseTicketForm = () => {
  const [open, setOpen] = useState<boolean>(false);

  useLayoutEffect(() => {
    const messageRef = document.getElementById("message-container");
    messageRef?.scrollTo({
      top: messageRef.scrollHeight,
      behavior: "smooth",
    });
  }, [open]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity(); // Show browser default validation messages
      return;
    }

    // Handle successful form submission here
    alert("Ticket submitted successfully!");
    handleClose();
  };

  if (!open)
    return (
      <Button
        label="Raise a Ticket"
        className="w-fit"
        icon={TicketIcon}
        onClick={handleOpen}
      />
    );

  return (
    <div className="flex flex-col gap-2.5 p-2.5 rounded-xl bg-white border border-neutral-200 shadow-e3">
      <div className="flex items-center justify-between">
        <h6 className="text-color-1000 font-semibold text-sm">
          Raise a Ticket
        </h6>
        <CloseIcon
          className="cursor-pointer hover:scale-105"
          onClick={handleClose}
        />
      </div>
      <form
        className="w-full mt-1 flex flex-col gap-2.5"
        onSubmit={handleSubmit}
      >
        <Input
          autoFocus
          placeholder="Subject"
          required
          minLength={10}
          maxLength={100}
        />
        <Textarea
          rows={4}
          placeholder="Describe your issue..."
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
      </form>
    </div>
  );
};

export default RaiseTicketForm;

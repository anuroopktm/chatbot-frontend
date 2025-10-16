import { ReactComponent as TimerIcon } from "@/assets/actions/timer.svg?react";
import Accordion from "@/components/common/Accordion/Accordion";
import Chips from "../common/Chips/Chips";

type Props = {};

const PastTickets = (props: Props) => {
  return (
    <Accordion icon={TimerIcon} title="Past Tickets">
      <div className="px-4 py-2 flex flex-col space-y-2.5">
        <div>
          <h6 className="text-neutral-primary font-semibold text-sm mb-1">
            Issue Description:
          </h6>
          <p className="text-color-1000 font-normal text-xs">
            Request to configure and implement a custom email signature for the
            user’s account.
          </p>
        </div>
        <div>
          <h6 className="text-neutral-primary font-semibold text-sm mb-1">
            Steps Taken:
          </h6>
          <p className="text-color-1000 font-normal text-xs">
            Request to configure and implement a custom email signature for the
            user’s account.
          </p>
        </div>
        <div>
          <h6 className="text-neutral-primary font-semibold text-sm mb-1">
            Outcome:
            <Chips type="WARNING" label="Pending" className="ml-2.5" />
          </h6>
          <div className="grid grid-cols-2 gap-2.5">
            <div className="flex flex-col gap-1">
              <p className="text-neutral-1000 font-medium text-xs">
                Date Created
              </p>
              <p className="text-neutral-700 font-normal text-xs">2025-05-22</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-neutral-1000 font-medium text-xs">
                Date Updated
              </p>
              <p className="text-neutral-700 font-normal text-xs">2025-05-22</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-neutral-1000 font-medium text-xs">Category</p>
              <p className="text-neutral-700 font-normal text-xs">
                User Assistance
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-neutral-1000 font-medium text-xs">
                Issue Type
              </p>
              <p className="text-neutral-700 font-normal text-xs">
                How-To Assistance
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-neutral-1000 font-medium text-xs">
                Customer Sentiment
              </p>
              <p className="text-neutral-700 font-normal text-xs">
                <Chips type="WARNING" label="Neutral" />
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-neutral-1000 font-medium text-xs">Priority</p>
              <p className="text-neutral-700 font-normal text-xs">
                <Chips type="SUCCESS" label="Low" />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h6 className="text-neutral-primary font-semibold text-sm mb-1">
            Tags
          </h6>
          <div className="flex flex-wrap gap-1">
            {[
              "I Phone",
              "No",
              "Mobiletesting",
              "Neutral",
              "Low",
              "Question",
              "Relevant",
            ].map((type) => (
              <Chips key={type} label={type} />
            ))}
          </div>
        </div>
      </div>
    </Accordion>
  );
};

export default PastTickets;

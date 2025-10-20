import { ReactComponent as TimerIcon } from "@/assets/actions/timer.svg?react";
import Accordion from "@/components/common/Accordion/Accordion";
import Chips, { ChipTypes, type ChipLabel } from "../common/Chips/Chips";

type Props = {};

type DataType = {
  ticket_id: string;
  status: ChipLabel;
  title: string;
  description: string;
};

const data: DataType[] = [
  {
    ticket_id: "TICK032",
    status: "Open",
    title: "Mobile App Testing on Real Devices",
    description:
      "How do I Test on real mobile devices? Please provide more details about Experience",
  },
  {
    ticket_id: "TICK044",
    status: "In Progress",
    title: "Guide to Using Real Mobile Devices",
    description:
      "How do I Test on real mobile devices? Please provide more details about Experience",
  },
  {
    ticket_id: "TICK068",
    status: "Closed",
    title: "Automated Mobile App Testing",
    description:
      "How do I Test on real mobile devices? Please provide more details about Experience",
  },
];

const PastTickets = (props: Props) => {
  return (
    <Accordion icon={TimerIcon} title="Past Tickets">
      <div className="px-4 py-2 flex flex-col space-y-2.5">
        {data.map((item) => (
          <div key={item.ticket_id}>
            <div className="flex justify-between">
              <h6 className="text-neutral-primary font-semibold text-sm">
                Ticket ID:
                <Chips type="INFO" label={item.ticket_id} className="ml-2.5" />
              </h6>
              <Chips type={ChipTypes[item.status]} label={item.status} />
            </div>
            <h6 className="text-neutral-primary font-semibold text-sm mb-1">
              {item.title}
            </h6>
            <p className="text-color-1000 font-normal text-xs">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Accordion>
  );
};

export default PastTickets;

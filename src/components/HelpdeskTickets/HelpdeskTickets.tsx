import { formatChatTime } from "@/utils/formatChatTime";
import Chips, { type ChipLabel } from "../common/Chips/Chips";

type DataType = {
  ticket_id: string;
  status: ChipLabel;
  title: string;
  description: string;
  created_by: string;
  assigned_to: string;
  last_updated_at: string;
};

const data: DataType[] = [
  {
    ticket_id: "TICK001",
    title: "Password Reset Request",
    description:
      "The user reported being unable to access her corporate account due to a forgotten password. She has attempted multiple unsuccessful login attempts which temporarily locked her account. The request includes resetting the password and generating a temporary secure credential to allow immediate access. Additionally, the user asked for guidance on updating security questions and enabling two-factor authentication to avoid future lockouts. The service desk is also required to verify the user’s identity as per the IT security policy before processing the reset.",
    created_by: "Alice Johnson",
    assigned_to: "IT Helpdesk",
    status: "Closed",
    last_updated_at: "2025-10-19 14:30:00",
  },
  {
    ticket_id: "TICK002",
    title: "Software Installation",
    description:
      "The design team requested installation of licensed project-specific design software on Bob Smith’s workstation. The installation requires administrative privileges and may involve configuring additional plugins, activating the license through an enterprise account, and verifying compatibility with the system’s hardware specifications. The task includes backing up existing design files, installing the software, applying patches or updates, and conducting a test run to ensure proper functionality without affecting ongoing work.",
    created_by: "Bob Smith",
    assigned_to: "IT Support",
    status: "In Progress",
    last_updated_at: "2025-10-18 09:15:00",
  },
  {
    ticket_id: "TICK003",
    title: "Network Access Issue",
    description:
      "The user reported intermittent disconnections from the corporate Wi-Fi and shared network drives, especially during large file transfers. The issue affects productivity as certain shared folders become inaccessible randomly. The ticket requires diagnosis of network stability, checking switch port activity, reviewing access logs, and ensuring no IP conflicts or firewall restrictions are causing disruptions. The Network Team is also expected to verify VPN stability for remote access if needed.",
    created_by: "Carol Davis",
    assigned_to: "Network Team",
    status: "Open",
    last_updated_at: "2025-10-20 10:45:00",
  },
  {
    ticket_id: "TICK004",
    title: "Parent Flow ID Needed",
    description:
      "The development team requested the inclusion of a parent flow ID in the workflow system to maintain hierarchical relationships between processes. This adjustment is required for accurate data mapping, traceability, and automated reporting across multiple modules. The enhancement ensures that child processes can be linked to their main workflow, improving transparency during audits and workflow analysis.",
    created_by: "David Wilson",
    assigned_to: "Development Team",
    status: "Closed",
    last_updated_at: "2025-10-10 11:20:00",
  },
  {
    ticket_id: "TICK005",
    title: "Hardware Replacement",
    description:
      "The user’s laptop is frequently crashing and showing hardware failure indicators such as overheating and boot errors. Under warranty policy, the system needs to be replaced. The process involves data backup, migration of user’s files and applications to a new device, proper disposal or return of faulty hardware, and verification that the new laptop meets company security standards including encryption and antivirus installation.",
    created_by: "Eva Brown",
    assigned_to: "Hardware Team",
    status: "In Progress",
    last_updated_at: "2025-10-19 10:05:00",
  },
  {
    ticket_id: "TICK006",
    title: "Email Signature Configuration",
    description:
      "The user requested a standardized email signature that includes name, designation, contact information, company logo, and confidentiality disclaimer. The configuration must comply with corporate branding guidelines. The IT Admin needs to apply this signature template across desktop Outlook and mobile email clients to ensure uniformity and professionalism in external communications.",
    created_by: "Frank Miller",
    assigned_to: "IT Admin",
    status: "Open",
    last_updated_at: "2025-10-16 13:40:00",
  },
  {
    ticket_id: "TICK007",
    title: "VPN Access Request",
    description:
      "A new employee requires secure VPN access to connect remotely to corporate resources. The process includes creating VPN credentials, configuring VPN software, assigning necessary network permissions, and enforcing multi-factor authentication. The Security Team must ensure the request complies with security protocols and log the device details used for access.",
    created_by: "Grace Lee",
    assigned_to: "Security Team",
    status: "Closed",
    last_updated_at: "2025-10-08 15:25:00",
  },
  {
    ticket_id: "TICK008",
    title: "Meeting Room Setup",
    description:
      "Setup is needed for the audio-visual equipment in Conference Room B to support an upcoming meeting. Tasks include calibrating the projector, testing the video conferencing system, ensuring microphone and speakers work properly, setting up HDMI/USB connections, and running connectivity tests with remote participants.",
    created_by: "Henry Taylor",
    assigned_to: "AV Support",
    status: "In Progress",
    last_updated_at: "2025-10-18 08:50:00",
  },
  {
    ticket_id: "TICK009",
    title: "Database Permission",
    description:
      "The development team requested read and write access to the production database for troubleshooting and deployment purposes. The DBA Team must review roles, ensure no violation of data security policies, create user accounts if necessary, and provide access logs for accountability.",
    created_by: "Ivan Clark",
    assigned_to: "DBA Team",
    status: "Open",
    last_updated_at: "2025-10-15 14:15:00",
  },
  {
    ticket_id: "TICK010",
    title: "Website Update",
    description:
      "The marketing team requested updates to the company website to showcase new products, promotional banners, and announcements. Tasks include adding new visuals, updating content on product pages, performing UI improvements, ensuring mobile responsiveness, and testing all updated pages before deployment.",
    created_by: "Julia Adams",
    assigned_to: "Web Team",
    status: "In Progress",
    last_updated_at: "2025-10-20 12:30:00",
  },
];

const HelpdeskTickets = () => {
  return (
    <div className="relative flex flex-col h-full m-2.5 overflow-auto space-y-5">
      {data.map((item) => (
        <details
          key={item.ticket_id}
          className="group flex flex-col p-2.5 bg-white border border-border-variant-1 shadow-drop-400 rounded-xl cursor-pointer hover:bg-brand-primary-light transition-all"
        >
          <summary className="flex flex-col gap-2.5">
            <div className="flex items-center grow gap-2.5">
              <Chips type="INFO" label={item.ticket_id} />
              <h6 className="text-neutral-primary font-semibold text-sm grow line-clamp-1">
                {item.title}
              </h6>
              {item.status === "Open" && <Chips type="ERROR" label="Open" />}
              {item.status === "In Progress" && (
                <Chips type="WARNING" label="In Progress" />
              )}
              {item.status === "Closed" && (
                <span className="text-neutral-400 font-medium text-xs">
                  {formatChatTime(item.last_updated_at)}
                </span>
              )}
            </div>
            <div className="flex flex-col max-h-20 group-open:max-h-96 overflow-hidden transition-all duration-500 ease-in-out">
              <p className="text-color-1000 text-xs line-clamp-2 group-open:line-clamp-none">
                {item.description}
              </p>
              <p className="text-neutral-1000 font-medium text-xs hidden group-open:block mt-5">
                Created By,
              </p>
              <p className="text-neutral-700 font-normal text-xs hidden group-open:block">
                {item.created_by}
              </p>
              <p className="text-neutral-1000 font-medium text-xs hidden group-open:block mt-2.5">
                Assigned To,
              </p>
              <p className="text-neutral-700 font-normal text-xs hidden group-open:block">
                {item.assigned_to}
              </p>
            </div>
          </summary>
        </details>
      ))}
    </div>
  );
};

export default HelpdeskTickets;

import AvatarImg from "@/assets/branding/avatar.png";
import { formatChatTime } from "@/utils/formatChatTime";

const data = [
  {
    id: 1,
    title: "Uses of CX Hub",
    description:
      "The CX Hub is designed to enhance customer experience by unifying communication channels, improving service efficiency, and offering tools for better customer interaction, feedback collection, and lifecycle management.",
    last_updated: "2025-10-20T12:30:00Z", // Today
  },
  {
    id: 2,
    title: "User Enquiry",
    description:
      "The CX Hub, or Customer Experience Hub, is a centralized platform that enables users to raise queries, track responses, and receive timely support from the team, ensuring smooth communication between customers and service providers.",
    last_updated: "2025-10-20T11:00:00Z", // 1 hr ago → Today
  },
  {
    id: 3,
    title: "Key Features",
    description:
      "It offers centralized customer data management, intelligent analytics dashboards, performance tracking, and automated workflows to streamline business operations while improving customer satisfaction.",
    last_updated: "2025-10-19T15:45:00Z", // Yesterday
  },
  {
    id: 4,
    title: "Integration Options",
    description:
      "The system allows seamless integration with CRM platforms, third-party applications, ticketing systems, and support tools through APIs, webhooks, and custom connectors to ensure smooth data exchange.",
    last_updated: "2025-10-18T09:20:00Z", // 2 days ago
  },
  {
    id: 5,
    title: "Analytics Capabilities",
    description:
      "It provides real-time tracking of customer journeys, sentiment analysis, performance metrics, and detailed insights that help businesses make informed decisions and enhance overall service quality.",
    last_updated: "2025-10-15T14:10:00Z", // 5 days ago (Within last week)
  },
  {
    id: 6,
    title: "Customization",
    description:
      "The platform can be customized to align with your brand identity, workflows, user roles, and business requirements, offering flexibility in UI components, modules, and access permissions.",
    last_updated: "2025-10-13T11:35:00Z", // 1 week ago
  },
  {
    id: 7,
    title: "Security Features",
    description:
      "It includes enterprise-grade security measures such as role-based access control, data encryption, audit logging, multi-factor authentication, and compliance with GDPR and ISO standards.",
    last_updated: "2025-10-10T16:50:00Z", // 10 days ago
  },
  {
    id: 8,
    title: "Reporting Tools",
    description:
      "The CX Hub offers comprehensive reporting tools, customizable dashboards, exportable data formats, and visual insights to monitor performance, team productivity, and customer feedback trends.",
    last_updated: "2025-10-08T13:25:00Z", // 12 days ago
  },
  {
    id: 9,
    title: "Mobile Access",
    description:
      "Users can access all essential CX Hub functionalities through mobile applications, enabling on-the-go monitoring, notifications, and task management with a responsive and user-friendly interface.",
    last_updated: "2025-10-05T08:40:00Z", // 15 days ago
  },
  {
    id: 10,
    title: "Support Resources",
    description:
      "The platform provides 24/7 customer support, a comprehensive knowledge base, training resources, FAQs, and documentation to assist users in resolving issues and maximizing platform usage.",
    last_updated: "2024-10-01T12:15:00Z", // 3 weeks ago
  },
];

const ConversationHistory = () => {
  return (
    <div className="relative flex flex-col h-full m-2.5 overflow-auto space-y-5">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex gap-2.5 items-center p-2.5 bg-white border border-border-variant-1 shadow-drop-400 rounded-xl cursor-pointer hover:bg-brand-primary-light"
        >
          <div className="bg-color-100 rounded-full h-9 w-9 overflow-hidden shrink-0">
            <img src={AvatarImg} alt="Avatar" className="w-full h-full mt-1" />
          </div>
          <div className="flex flex-col gap-0.5 grow">
            <div className="flex justify-between items-center gap-2.5">
              <h6 className="text-neutral-primary font-semibold text-sm flex-1 line-clamp-1">
                {item.title}
              </h6>
              <span className="text-neutral-400 font-medium text-xs">
                {formatChatTime(item.last_updated)}
              </span>
            </div>
            <p className="text-color-1000 font-normal text-xs line-clamp-2">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConversationHistory;

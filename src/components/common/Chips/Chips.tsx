import { ReactComponent as LinkIcon } from "@/assets/actions/link.svg?react";

export type ChipType = "SUCCESS" | "WARNING" | "ERROR" | "INFO" | "LINK";

export type ChipLabel = "Closed" | "In Progress" | "Open" | "Info" | "Link";

type Props = {
  label: string;
  type?: ChipType;
  href?: string;
  className?: string;
};

export const ChipTypes: Record<ChipLabel, ChipType> = {
  Closed: "SUCCESS",
  "In Progress": "WARNING",
  Open: "ERROR",
  Info: "INFO",
  Link: "LINK",
};

const Chips = ({
  label = "",
  type = undefined,
  className = "",
  href = "",
}: Props) => {
  switch (type) {
    case "SUCCESS":
      return (
        <span
          className={`inline-block rounded-md px-2 py-1 text-success-600 bg-success-alpha-10 font-semibold text-xs ${className}`}
        >
          {label}
        </span>
      );
    case "WARNING":
      return (
        <span
          className={`inline-block rounded-md px-2 py-1 text-warning-500 bg-warning-alpha-10 font-semibold text-xs ${className}`}
        >
          {label}
        </span>
      );
    case "ERROR":
      return (
        <span
          className={`inline-block rounded-md px-2 py-1 text-error-500 bg-error-alpha-10 font-semibold text-xs ${className}`}
        >
          {label}
        </span>
      );
    case "INFO":
      return (
        <span
          className={`inline-block rounded-md px-2 py-1 text-primary-500 bg-primary-alpha-10 font-semibold text-xs ${className}`}
        >
          {label}
        </span>
      );
    case "LINK":
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 px-1.5 py-0.5 rounded-md bg-white border-2 border-border-variant-2 font-normal text-xs text-black ${className}`}
        >
          <LinkIcon className="shrink-0 h-4 w-4" />
          {label}
        </a>
      );
    default:
      return (
        <span
          className={`inline-block px-1.5 py-0.5 rounded-md bg-white border-2 border-border-variant-2 font-normal text-xs text-black ${className}`}
        >
          {label}
        </span>
      );
  }
};

export default Chips;

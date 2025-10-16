import { ReactComponent as LinkIcon } from "@/assets/actions/link.svg?react";

type Props = {
  label: string;
  type?: "SUCCESS" | "WARNING" | "ERROR" | "INFO" | "LINK";
  className?: string;
};

const Chips = ({ label = "", type = undefined, className = "" }: Props) => {
  switch (type) {
    case "SUCCESS":
      return (
        <span
          className={`inline-block rounded-lg px-3 py-1 text-success-600 bg-success-alpha-10 font-semibold text-xs ${className}`}
        >
          {label}
        </span>
      );
    case "WARNING":
      return (
        <span
          className={`inline-block rounded-lg px-3 py-1 text-warning-500 bg-warning-alpha-10 font-semibold text-xs ${className}`}
        >
          {label}
        </span>
      );
    case "ERROR":
      return (
        <span
          className={`inline-block rounded-lg px-3 py-1 text-error-500 bg-error-alpha-10 font-semibold text-xs ${className}`}
        >
          {label}
        </span>
      );
    case "INFO":
      return (
        <span
          className={`inline-block rounded-lg px-3 py-1 text-primary-500 bg-primary-alpha-10 font-semibold text-xs ${className}`}
        >
          {label}
        </span>
      );
    case "LINK":
      return (
        <span
          className={`inline-block px-2 py-1 rounded-xl bg-white border border-border-variant-2 font-normal text-xxs text-black ${className}`}
        >
          <LinkIcon />
        </span>
      );
    default:
      return (
        <span
          className={`inline-block px-3 py-1 rounded-xl bg-white border-2 border-border-variant-2 font-normal text-xxs text-black ${className}`}
        >
          {label}
        </span>
      );
  }
};

export default Chips;

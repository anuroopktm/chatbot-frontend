import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const formatChatTime = (timestamp: string | Date) => {
  const now = dayjs();
  const time = dayjs(timestamp);

  const diffInDays = now.diff(time, "day");

  if (diffInDays < 7) {
    return `${time.fromNow(true)} ago`;
  }

  if (time.year() === now.year()) {
    return time.format("D MMMM");
  }

  return time.format("D MMM YYYY");
};

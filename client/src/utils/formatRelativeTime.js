export const formatRelativeTime = (date) => {
  if (!date) return "No activity";

  const now = new Date();
  const updated = new Date(date);

  const seconds = Math.floor((now - updated) / 1000);

  if (seconds < 60) return "Just now";

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60)
    return `${minutes} min${minutes > 1 ? "s" : ""} ago`;

  const hours = Math.floor(minutes / 60);

  if (hours < 24)
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;

  const days = Math.floor(hours / 24);

  if (days === 1) return "Yesterday";

  if (days < 7)
    return `${days} days ago`;

  return updated.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
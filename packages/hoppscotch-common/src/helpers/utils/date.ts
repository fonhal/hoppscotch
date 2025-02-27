export function shortDateTime(
  date: string | number | Date,
  includeTime: boolean = true
) {
  return new Date(date).toLocaleString("zh-CN", {
    year: "numeric",
    month: "short",
    day: "numeric",
    ...(includeTime
      ? {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        }
      : {}),
  })
}

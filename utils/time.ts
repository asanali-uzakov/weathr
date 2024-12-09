export function currentTime(timeZone: string, date?: boolean) {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    ...(date && { day: '2-digit', month: 'short' }),
  }).format(new Date())
}

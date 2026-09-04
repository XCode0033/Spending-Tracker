export function formatSpentAt(iso: string): string {
  const d = new Date(iso)
  const now = new Date()

  const sameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()

  const yesterday = new Date(now)
  yesterday.setDate(now.getDate() - 1)

  const time = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })

  if (sameDay(d, now)) return `Today, ${time}`
  if (sameDay(d, yesterday)) return `Yesterday, ${time}`
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

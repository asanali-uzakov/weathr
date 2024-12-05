// Helper function to form time ranges
export default function (start: number, stop: number, step: number) {
  return Array.from({ length: (stop - start) / step }, (_, i) => start + i * step)
}

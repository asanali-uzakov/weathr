export function toPercents(value: number) {
  return Math.round((value + Number.EPSILON) * 100)
}

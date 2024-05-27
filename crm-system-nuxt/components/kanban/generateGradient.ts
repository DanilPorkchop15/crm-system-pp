export const generateColumnGradient = (index: number, total = 1) : { backgroundColor: string } => {
  const intensity = 100 - ((index + 2) / total) * 50
  const step = 25 / (total - 1)
  return {
    backgroundColor: `hsla(203, 54%, ${intensity}%, 30%)`,
  }
}
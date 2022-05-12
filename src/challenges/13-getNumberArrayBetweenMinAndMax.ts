export default function getNumberArrayBetweenMinAndMax(
  min: number, max: number
): number[] {
  return [...Array(max - min + 1)]
    .map((_, index) => min + index);
}
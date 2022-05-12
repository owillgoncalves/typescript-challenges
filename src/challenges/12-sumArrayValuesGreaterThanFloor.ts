export default function sumArrayValuesGreaterThanFloor(
  array: number[], floor: number
): number {
  return array
    .filter(value => value > floor)
    .reduce((acc, value) => acc + value, 0);
}
export default function getIntersectedArrays(
  arr1: number[], arr2: number[]
): number[] {
  const intersectedArrays = new Set([...arr1, ...arr2]);
  return Array.from(intersectedArrays);
}

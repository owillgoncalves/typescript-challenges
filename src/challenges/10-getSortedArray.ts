type TOrder = 'asc' | 'desc';

export default function getSortedArray(
  array: any[], order: TOrder
): any[] {
  return order === 'asc'
    ? array.sort((a, b) => a - b)
    : array.sort((a, b) => b - a);
}
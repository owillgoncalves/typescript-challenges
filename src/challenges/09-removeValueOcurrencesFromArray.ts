export default function removeValueOcurrencesFromArray(
  array: any[], value: any
): any[] {
  return array.filter(item => item !== value);
}
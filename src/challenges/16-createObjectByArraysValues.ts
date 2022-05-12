export default function createObjectByArraysValues(keys: any[], values: any[]): object {
  return Object.fromEntries(
    keys.map((key, index) => [key, values[index]])
  )
}

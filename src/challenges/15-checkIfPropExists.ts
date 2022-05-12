export default function checkIfPropExists (
  object: Object, prop: string
): boolean {
  return object.hasOwnProperty(prop)
}
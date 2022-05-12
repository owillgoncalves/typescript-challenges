export default function getJoinedSetObjects(set1: Set<any>, set2: Set<any>): Set<any> {
  return new Set([...Array.from(set1), ...Array.from(set2)])
}
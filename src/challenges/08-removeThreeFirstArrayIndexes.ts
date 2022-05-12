export default function removeThreeFirstArrayIndexes(
	array: any[]
): any[] {
	return array.length < 3
		? []
		: array.slice(3);
}
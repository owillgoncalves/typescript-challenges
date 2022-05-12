export default function checkSubstringOcurrenceOnString(
	substring: string, string: string
): number {
	return string
		.split('')
		.filter((currentSubstring) =>
			currentSubstring === substring).length;
}
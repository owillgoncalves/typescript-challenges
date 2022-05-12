export default function calculateSixValues(
	a: number, b: number, c: number, d: number, e: number, f: number
): number {
	return ((((a + b) - c) * d) / e) ** f
}
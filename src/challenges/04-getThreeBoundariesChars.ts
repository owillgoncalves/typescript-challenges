type TFlag = 'start' | 'end';

export default function getThreeBoundariesChars(
	text: string, flag: TFlag
): string {
	const boundariesChars = {
		start: text.slice(0, 3),
		end: text.slice(-3)
	};
	return text.length < 3 ? text : boundariesChars[flag];
} 
type TFlag = 'firstname' | 'lastname';

export default function getSplittedName(
	fullname: string, flag?: TFlag
): string {
	const splittedName = fullname.split(' ');
	const partialName = {
		firstname: splittedName[0],
		lastname: splittedName.slice(1).join(' ')
	};
	return !flag || !partialName.lastname
		? fullname
		: partialName[flag];
}
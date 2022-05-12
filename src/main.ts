import checkIfParamsAreEqual from './challenges/01-checkIfValuesAreEqual';
import getValueType from './challenges/02-getValueType';
import calculateSixValues from './challenges/03-calculateSixValues';
import getThreeBoundariesChars from './challenges/04-getThreeBoundariesChars';
import getSplittedName from './challenges/05-getSplittedName';
import checkIfNumberIsEven from './challenges/06-checkIfNumberIsEven';
import checkSubstringOcurrenceOnString from './challenges/07-checkSubstringOcurrenceOnString';
import removeThreeFirstArrayIndexes from './challenges/08-removeThreeFirstArrayIndexes';
import removeValueOcurrencesFromArray from './challenges/09-removeValueOcurrencesFromArray';
import getSortedArray from './challenges/10-getSortedArray';

const challenges = {
	'01': checkIfParamsAreEqual,
	'02': getValueType,
	'03': calculateSixValues,
	'04': getThreeBoundariesChars,
	'05': getSplittedName,
	'06': checkIfNumberIsEven,
	'07': checkSubstringOcurrenceOnString,
	'08': removeThreeFirstArrayIndexes,
	'09': removeValueOcurrencesFromArray,
	'10': getSortedArray,
}

const challengeToRun = '10';

console.log(
	`${challenges[challengeToRun].name}: `,
	challenges[challengeToRun]([1,2,3,4,2,5,6,5,5], 'desc')
);

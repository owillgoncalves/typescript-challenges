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
import getIntersectedArrays from './challenges/11-getIntersectedArrays';
import sumArrayValuesGreaterThanFloor from './challenges/12-sumArrayValuesGreaterThanFloor';
import getNumberArrayBetweenMinAndMax from './challenges/13-getNumberArrayBetweenMinAndMax';
import getFormattedAddress from './challenges/14-getFormattedAddress';
import checkIfPropExists from './challenges/15-checkIfPropExists';
import createObjectByArraysValues from './challenges/16-createObjectByArraysValues';
import checkIfDatesAreEqual from './challenges/17-checkIfDatesAreEqual';
import getDaysBetweenDates from './challenges/18-getDaysBetweenDates';
import changeDaysOnDate from './challenges/19-changeDaysOnDate';
import createObjectByArraysValuesV2 from './challenges/20-createObjectByArraysValues';
import getJoinedSetObjects from './challenges/21-getJoinedSetObjects';

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
	'11': getIntersectedArrays,
	'12': sumArrayValuesGreaterThanFloor,
	'13': getNumberArrayBetweenMinAndMax,
	'14': getFormattedAddress,
	'15': checkIfPropExists,
	'16': createObjectByArraysValues,
	'17': checkIfDatesAreEqual,
	'18': getDaysBetweenDates,
	'19': changeDaysOnDate,
	'20': createObjectByArraysValuesV2,
	'21': getJoinedSetObjects
}

const challengeToRun = '21';

console.log(
	`${challenges[challengeToRun].name}: `,
	challenges[challengeToRun](
		new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
		new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 11])
	)
);

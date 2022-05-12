export default function getDaysBetweenDates(
  startDate: Date, endDate: Date
): number {
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const differenceInMilliseconds =
    endDate.getTime() - startDate.getTime();
  const differenceInDays =
    differenceInMilliseconds > 0
      ? Math.ceil(
        differenceInMilliseconds / millisecondsPerDay
      )
      : 0;
  return differenceInDays;
}

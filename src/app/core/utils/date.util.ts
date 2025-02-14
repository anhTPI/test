/**
 * Convert date to Timestamps
 *
 * @param date - Date
 * @returns timestamps
 */
export function dateToTimestamps(date: Date | number): number {
  if (date === 0) return date;

  return new Date(date).getTime();
}

/**
 * Convert date to start of day
 *
 * @param date - Date
 * @returns date
 */
export function dateToStartOfDay(date: Date): Date {
  return new Date(date.setHours(0, 0, 0, 0));
}

/**
 * Convert date to end of day
 *
 * @param date - Date
 * @returns date
 */
export function dateToEndOfDay(date: Date): Date {
  return new Date(date.setHours(23, 59, 59, 999));
}

/**
 * Date is after other date
 *
 * @param date - Date
 * @param compareDate - Date
 * @returns boolean
 */
export function dateIsAfter(date: Date, compareDate: Date): boolean {
  if (!date || !compareDate) {
    return false;
  }

  return date > compareDate;
}

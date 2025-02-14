/**
 * Unique array value
 *
 * @param array -
 * @returns array
 */
export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

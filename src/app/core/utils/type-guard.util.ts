/**
 * Check value type is Object ?
 *
 * @param  value -
 * @returns boolean
 */
export function isObjectType(value: unknown): value is Record<string, unknown> {
  return Object.prototype.toString.call(value) === '[object Object]';
}

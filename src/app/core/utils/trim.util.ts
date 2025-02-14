import { isObjectType } from './type-guard.util';

/**
 * trim string of object
 */
export function trim(data: unknown): unknown {
  if (isObjectType(data) && Object.keys(data).length) {
    Object.keys(data).forEach((key) => {
      data[key] = trim(data[key]);
    });
  } else if (typeof data === 'string') {
    return data.trim();
  }

  return data;
}

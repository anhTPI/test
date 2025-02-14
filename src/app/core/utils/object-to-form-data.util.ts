import { isNil } from 'lodash-es';

/**
 * Convert Object to formData
 *
 * @param data - object data
 * @returns FormData
 */
export function objectToFormData(data: Record<string, string | Blob>): FormData {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (isNil(value)) {
      return;
    }

    if (Array.isArray(value)) {
      value.forEach((item) => {
        formData.append(key, item);
      });
    } else {
      formData.append(key, value);
    }
  });

  return formData;
}

/**
 * Convert file to base64 url
 *
 * @param file - file
 * @param isRemoveMeta - remove base64 meta info from data url (data:*\/*;base64,)
 * @returns Promise<string>
 */
export function fileToBase64(file: File, isRemoveMeta = false): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result as string;

      resolve(isRemoveMeta ? base64.substring(base64.indexOf(',') + 1) : base64);
    };
    reader.onerror = (error) => reject(error);
  });
}

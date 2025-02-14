/**
 * base64 date URI string to File
 *
 * @param dateURI - data URI
 * @param filename - file name
 * @returns File
 */
export function dataURItoFile(dateURI: string, filename = 'unknown'): File | void {
  const arr = dateURI.split(',');
  const mimeType = arr[0]?.match(/:(.*?);/)?.[1];

  if (!(arr[0] && mimeType)) return;

  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, {
    type: mimeType,
  });
}

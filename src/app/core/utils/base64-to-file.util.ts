/**
 * base64 string to File
 *
 * @param base64Str - base64
 * @param mimeType - file mime type
 * @param filename - file name
 * @returns File
 */
export function base64ToFile(
  base64Str: string,
  mimeType: string,
  filename = 'unknown'
): File | void {
  // prevent base64 is data url
  if (base64Str.includes(',')) {
    base64Str = base64Str.substring(base64Str.indexOf(',') + 1);
  }

  const bstr = atob(base64Str);

  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, {
    type: mimeType,
  });
}

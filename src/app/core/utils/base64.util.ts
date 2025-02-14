/**
 * Base64 encode and decode (support UTF8)
 *
 * https://stackoverflow.com/a/30106551
 */
export default class Base64 {
  /**
   * Encoding UTF8 to base64
   *
   * @param str - source string
   * @returns encode string
   */
  static encode(str: string): string {
    return btoa(
      encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_match, p1) => {
        return String.fromCharCode(parseInt(p1, 16));
      })
    );
  }

  /**
   * Decoding base64 to UTF8
   *
   * @param str - decode string
   * @returns decode string
   */
  static decode(str: string): string {
    return decodeURIComponent(
      atob(str)
        .split('')
        .map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
  }
}

/**
 * transfer current date into YYYY/MM/DD format
 *
 * @export
 * @return {*}  {string}
 */
export function dateFormatInYMD(): string {
  const currentDate = new Date();
  const y = currentDate.getFullYear();
  const m = ('0' + ((currentDate.getMonth() % 12) + 1)).slice(-2);
  const d = currentDate.getDate();

  return '' + y + m + d;
}

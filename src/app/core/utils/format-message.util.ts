type Args = string[] | { [key: string]: unknown };
type Template = { start: string; end: string };

function parseMsg(msg: string, key: string, value: unknown) {
  let compileMsg = msg;
  let index = compileMsg.indexOf(key);

  while (index > -1) {
    compileMsg = compileMsg.substring(0, index) + value + compileMsg.substring(index + key.length);

    index = compileMsg.indexOf(key);
  }

  return compileMsg;
}

function compile(msg: string, args: Args, { start, end }: Template) {
  let compileMsg = msg;

  if (Array.isArray(args)) {
    args.forEach((value, i) => {
      compileMsg = parseMsg(compileMsg, `${start}${i}${end}`, value);
    });
  } else {
    for (const [key, value] of Object.entries(args)) {
      compileMsg = parseMsg(compileMsg, `${start}${key}${end}`, value);
    }
  }

  return compileMsg;
}

/**
 * Format message
 * @param msg - message
 * @param args - replace params
 * @param template - pattern beginning and ending
 * @returns string
 */
export function formatMessage(
  msg: string,
  args: Args,
  template: Template = {
    start: '{{',
    end: '}}',
  }
): string {
  return compile(msg, args, template);
}

export { Args, Template };

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export default function objectDifference(a: any, b: any): Record<string, unknown> {
  try {
    return Object.entries(b)
      .filter(([key, val]) => a[key] !== val && key in a)
      .reduce(
        (_a, [key, v]) => ({
          ..._a,
          [key]: v,
        }),
        {}
      );
  } catch (error) {
    console.error(error);

    return {};
  }
}

export function calculateRatio(
  pixelWidth: number,
  pixelHeight: number
): {
  ratioWidth: number;
  ratioHeight: number;
} {
  for (let num = pixelHeight; num > 1; num--) {
    if (pixelWidth % num === 0 && pixelHeight % num === 0) {
      pixelWidth /= num;
      pixelHeight /= num;
    }
  }

  return {
    ratioWidth: pixelWidth,
    ratioHeight: pixelHeight,
  };
}

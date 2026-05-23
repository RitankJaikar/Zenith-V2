/**
 * Pads a numerical time value with leading zeros to meet a specified string length.
 */
export const padTime = (num: number, targetLength = 2): string =>
  String(num).padStart(targetLength, "0");

/**
 * Mathematically scales down a 3-digit millisecond value to 2 digits.
 */
export const getTwoDigitMs = (milliseconds: number): number =>
  Math.floor(milliseconds / 10);

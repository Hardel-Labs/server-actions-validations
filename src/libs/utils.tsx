/**
 * Concatenates non-empty strings from the given arguments.
 *
 * @param {...(string | undefined)} args - The strings to concatenate.
 * @return {string} - The concatenated string.
 */
export const clx = (...args: (string | undefined)[]): string => args.filter(Boolean).join(' ');

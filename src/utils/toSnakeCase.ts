/* eslint-disable @typescript-eslint/no-explicit-any */
export function toSnakeCase(obj: Record<string, any>) {
  const result: Record<string, any> = {};

  for (const key in obj) {
    const snakeKey = key.replace(
      /[A-Z]/g,
      (letter) => `_${letter.toLowerCase()}`
    );
    result[snakeKey] = obj[key];
  }

  return result;
}

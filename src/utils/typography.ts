export function keepInlineSeparators(text: string): string {
  return text.replace(/ *[|｜/] */g, (separator) => separator
    .replace(/ /g, "\u00a0")
    .replace(/[|｜/]/g, "\u2060$&\u2060"));
}

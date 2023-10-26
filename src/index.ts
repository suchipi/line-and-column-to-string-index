export function lineColumnToIndex(
  inputString: string,
  line: number,
  column: number
): number {
  const lines = inputString.split("\n");

  if (
    line < 0 ||
    line >= lines.length ||
    column < 0 ||
    column > lines[line].length
  ) {
    throw new Error(
      `Invalid line/column: ${line}:${column}. Input string was ${lines.length} lines`
    );
  }

  let index = 0;
  for (let i = 0; i < line; i++) {
    index += lines[i].length + "\n".length;
  }

  index += column;
  return index;
}

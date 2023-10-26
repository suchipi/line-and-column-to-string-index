import { test, expect } from "vitest";
import { lineColumnToIndex } from "./index";

test("lineColumnToIndex", () => {
  const code = `export function lineColumnToIndex(
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
      \`Invalid line/column: \${line}:\${column}. Input string was \${lines.length} lines\`
    );
  }

  let index = 0;
  for (let i = 0; i < line; i++) {
    index += lines[i].length + "\n".length;
  }

  index += column;
  return index;
}
`;

  const index = lineColumnToIndex(code, 5, 16);
  const slicedBefore = code.slice(0, index);
  const slicedAfter = code.slice(index);

  expect({ index, slicedBefore, slicedAfter }).toMatchInlineSnapshot(`
    {
      "index": 119,
      "slicedAfter": "inputString.split(\\"
    \\");

      if (
        line < 0 ||
        line >= lines.length ||
        column < 0 ||
        column > lines[line].length
      ) {
        throw new Error(
          \`Invalid line/column: \${line}:\${column}. Input string was \${lines.length} lines\`
        );
      }

      let index = 0;
      for (let i = 0; i < line; i++) {
        index += lines[i].length + \\"
    \\".length;
      }

      index += column;
      return index;
    }
    ",
      "slicedBefore": "export function lineColumnToIndex(
      inputString: string,
      line: number,
      column: number
    ): number {
      const lines = ",
    }
  `);
});

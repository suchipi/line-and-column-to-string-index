# line-and-column-to-string-index

TypeScript function which converts 0-based line and column into an index into a string

## Usage

```ts
import { lineColumnToIndex } from "line-and-column-to-string-index";

const myString = `
something something blah blah
blah fjdkfdsjfklds
dsjfkdsljfkldsjfklsdsjfkdsjfl!!
`;

const line = 2; // 0-based
const column = 2; // 0-based

const index = lineColumnToIndex(myString, line, column);
console.log(index); // 33
```

## License

MIT

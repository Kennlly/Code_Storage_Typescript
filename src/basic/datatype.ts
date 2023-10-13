// 1. Tuple: Setting up an array with fixed length and datatype
const myTuple: [string, number, boolean] = ["Kenny", 666, true];
console.log("myTuple: ", myTuple);

// 2. Enum: Starting from 0 by default; If starting from 1, ts will increase automatically
const enum Size {
  Small = 1,
  Medium,
  Large,
}
const mySize: Size = Size.Medium;
console.log("enum-mySize: ", mySize);

// 3. Never: For functions throw error OR contains endless loop
//    Ensure NOT generating infinite loop in "never" function
const createError = (msg: string): never => {
  throw new Error(msg);
};
const numOrStr = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return createError("This should never happen!");
};

// 4. Union Types + Type Aliases
//    By default, TS does NOT accept null or undefined - Use Union Type of "?"
//    If a param is optional, it MUST be in the last of param's list
const greeting = (name: string | null | undefined, id?: number): void => {
  console.log("greeting name: ", name);
  console.log("greeting id: ", id);
};
greeting("Kenny");

type stringOrNumber = (string | number)[];
type UserId = stringOrNumber;
const myUserId: UserId = ["Kenny"];
console.log("myUserId: ", myUserId);

// 5. Literal Types: Exactly, specific values
type Metric = "cm" | "inch";
const heightMetric: Metric = "cm";

// 6. Intersection Types
type Draggable = { drag: () => void };
type Resizable = { resize: () => void };
type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// 7. Type Assertion
// "<>" approach CANNOT be used in .jsx file
const cid: any = 1;
const customerId1: number = <number>cid;
const customerId2: number = cid as number;

/* Declaring Object
    There are two main tools: interfaces and type aliases.
    They both support extending other interfaces and types:
      Type aliases do this via intersection types "&"
      interfaces have a keyword "extends".
    Recommended using interfaces over type aliases. Specifically, because you will get better error messages.
    One major difference between type aliases vs interfaces is that interfaces are open and type aliases are closed.
* */

type BirdType = {
  wings: 2;
};

interface BirdInterface {
  wings: 2;
}

type Owl = { nocturnal: true } & BirdType;

interface Chicken extends BirdInterface {
  colourful: false;
  flies: false;
}

let owl: Owl = { wings: 2, nocturnal: true };
let chicken: Chicken = { wings: 2, colourful: false, flies: false };

// Pay attention to error msg
// owl = chicken;
// chicken = owl;

// interface with a function
interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const minus: MathFunc = (x: number, y: number): number => x - y;

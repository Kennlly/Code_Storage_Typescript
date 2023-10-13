class Coder {
  public readonly name: string;
  public readonly music: string;
  private _age: number;
  protected lang: string;
  static count: number = 0;
  public id: number;

  constructor(
    name: string,
    music: string,
    age: number,
    lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this._age = age;
    this.lang = lang;
    this.id = ++Coder.count;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}

const Dave: Coder = new Coder("Dave", "Rock", 42);
const Steve: Coder = new Coder("Steve", "Rock", 1);
Steve.age = 8;
console.log("Dave", Dave);
console.log("Steve", Steve.age);

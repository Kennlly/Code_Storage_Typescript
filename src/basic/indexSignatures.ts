// This cannot work in TS
// const todaysTransaction = {
//   Pizza: 10,
//   Books: 5,
// };
//
// const prop: string = "Pizza";
// console.log(todaysTransaction[prop]);

// Index Signature
// interface TransactionObj {
//   [index: string]: number;
//   Pizza: 10 /*If stating "Pizza" under index, then Pizza is required*/;
// }
// const todaysTransaction: TransactionObj = {
//   Pizza: 10,
//   Books: 5,
// };

// const prop: string = "Pizza";
// console.log(todaysTransaction[prop]);

// for (const index in todaysTransaction) {
//   console.log("index", index);
//   console.log("value", todaysTransaction[index]);
// }

// keyof Assertion
interface TransactionObj {
  Pizza: number;
  Books: number;
}
const todaysTransaction: TransactionObj = {
  Pizza: 10,
  Books: 5,
};
for (const index in todaysTransaction) {
  console.log("index", index);
  console.log("value", todaysTransaction[index as keyof TransactionObj]);
}

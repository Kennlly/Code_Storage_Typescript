// Usage of Rest Params
const total = (...nums: number[]): number => {
  return nums.reduce((a: number, b: number) => a + b);
};

// Not passing []
const result: number = total(1, 2, 3);

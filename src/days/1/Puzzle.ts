const findDigit = (s: string) => {
  for (let i of s) {
    const n = Number(i)
    if (!isNaN(n)) { return n }
  }
}
const extractNumber = (s: string) => {
  return findDigit(s) * 10 + findDigit(s.trim().split("").reverse().join(""))
}

const first = (input: string) => {
  return input.split("\n").map(extractNumber).reduce(
    (a, c) => a + c, 0
  )
};

const expectedFirstSolution = 'solution 1';

const second = (input: string) => {

  return 'solution 2';
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };

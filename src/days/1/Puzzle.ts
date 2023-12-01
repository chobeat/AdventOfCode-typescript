type findFunction = (s: string) => number


const firstLetterDigitMatcher = /(\d|one|two|three|four|five|six|seven|eight|nine)/;
const lastLetterDigitMatcher = /(\d|enin|thgie|neves|xis|evif|ruof|eerht|owt|eno)/;
const findDigitMatcher = /^[^\d]*(\d)\w*/i

const findDigit = (reg: RegExp) => (s: string) => parseInt(reg.exec(s)[1])

const extractDigits = (findFunc: findFunction, findFuncRev: findFunction) => (s: string) => findFunc(s) * 10 +
  findFuncRev(s.trim().split("").reverse().join(""))


const findAndSumDigits = (input: string, findFunc: findFunction, findFuncRev: findFunction) => {
  return input.split("\n").map(extractDigits(findFunc, findFuncRev)).reduce(
    (a, c) => a + c, 0
  )
}

const first = (input: string) => {
  return findAndSumDigits(input, findDigit(findDigitMatcher), findDigit(findDigitMatcher))
};

const expectedFirstSolution = 'solution 1';



const second = (input: string) => {

  return findAndSumDigits(input,)
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };

let factorialOfNumber = require('../factorial/index.js')

let ratioOfTwoNumbers = require('../ratio/index.js')

let ratioAndFactorial = function (num1, num2, num) {
  let ratio = ratioOfTwoNumbers(num1, num2)
  let factorial = factorialOfNumber(num)

  return {ratio, factorial}
}

module.exports = ratioAndFactorial

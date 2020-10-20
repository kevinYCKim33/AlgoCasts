// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9



//first take note of the sign and store it temporarily.
  // -90 ==> it's negative (-1)
//then do Math.abs to get rid of the signs...
  // -90 ==> 90
//then do your normal toString() reverse routine...
  // 90 => 09
//then do a parseInt...
  // 09 => 9
//then multiply it by the sign at the beginning;
  // 9 * -1 == -9
  function reverseInt(n) {
    let reversedAbsNum = parseInt(Math.abs(n)
      .toString()
      .split("")
      .reverse()
      .join(""));
    return Math.sign(n) * reversedAbsNum;
  }

  // my solution a year later...knowing type coercion but not Math.sign()
  function reverseInt(int) {
  // check if there is a negative sign first...
    let intInString = int.toString();
    let negChecker = intInString[0] == '-';

    let reversedAbsNum =  Math.abs(int).toString().split("").reverse().join("");

    if (negChecker) {
      return -1 * reversedAbsNum;
    }

    return 1 * reversedAbsNum; // 1 * '006' === 6
  }

module.exports = reverseInt;


//grider solution

// function reverseInt(n) {
//   const reversed = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('');
//
//   return parseInt(reversed) * Math.sign(n);
// }

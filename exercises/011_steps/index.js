// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


//I put 5
// #
// ##
// ###
// ####
// #####

//thinking for loop.
//every row, keep count of #'s and spaces
// if it's turn i, then number of spaces are n - i

// row 0 #
// row 1 ##
// row 2 ###
// row 3 ####

// GRIDER II DOUBLE FOR-LOOP IN RECURSVIE FORM
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}


// steps(5);
module.exports = steps;


// MINE
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log("#".repeat(i) + " ".repeat(n - i));
//   }
// }


// STEPHEN I
// RUNTIME: as we started to increase
  //when n was increased to 2, we had to do 4 things
  // n to 3, had to do 9 things
  // n to 4, had to do 16 things
  // this time it was n^2
  // this is a quadratic runtime
  
// function steps(n) {
//   for (let r = 0; r < n; r++) {
//     let stair = "";
//     for (let c = 0; c < n; c++) {
//       if (c <= r) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Recursive: I did it without Stephen!
// function pyramid(n, row = 0, col = 0, level = '') {
//   const midpoint = Math.floor((2*n - 1) / 2);
//   if (n === row) {
//     return;
//   }

//   if (col === (n * 2) -1) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }

//   if (midpoint - row <= col && midpoint + row >= col) {
//     level += '#';
//   } else {
//     level += ' ';
//   }
//   pyramid(n, row, col+1, level);
// }

// 1 yr. later 8/30/2019
const pyramid = (n) => {
  const columnWidth = (n * 2) - 1;
  const midpoint = Math.floor(columnWidth / 2);
  for (let r = 0; r < n; r++) {
    let rowPrint = "";
    const poundHighIndex = midpoint + r;
    const poundLowIndex = midpoint - r;
    for (let c = 0; c < columnWidth; c++) {
      if (c >= poundLowIndex && c<= poundHighIndex) {
        rowPrint += '#';
      } else {
        rowPrint += ' ';
      }
    }
    console.log(rowPrint);
  }
}

module.exports = pyramid;

// Recursive: Stephen's way without adding column;
// function pyramid(n, row = 0, level = '') {
//   if (row === n) {
//     return;
//   }
//
//   if (level.length === 2 * n -1) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }
//
//   const midpoint = Math.floor((2*n - 1) / 2);
//   let add;
//   if (midpoint - row <= level.length && midpoint + row >= level.length) {
//     add = '#';
//   } else {
//     add = ' ';
//   }
//   pyramid(n, row, level + add);
//
// }

// my recursive 8.30.2019
function pyramid(
  n, 
  r = 0, 
  level = '', 
  columnWidth = (n * 2) - 1, 
  midpoint = Math.floor(columnWidth / 2) 
 ) {
  if (n == r) return;

  // something here to alert we went through all columns in given row
  if (level.length == columnWidth) {
    console.log(level);
    return pyramid(n, r + 1);
  }

  if (level.length >= midpoint - r && level.length <= midpoint + r) {
    level += '#';
  } else {
    level += ' ';
  }

  return pyramid(n, r, level);
}

// GRIDER: The ol' for-loop way
// function pyramid(n) {
//   const midpoint = Math.floor((2*n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let col = 0; col < (n * 2) - 1; col++) {
//       if (midpoint - row <= col && midpoint + row >= col) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

// 1 yr. later 8/30/2019
// const pyramid = (n) => {
//   const columnWidth = (n * 2) - 1;
//   const midpoint = Math.floor(columnWidth / 2);
//   for (let r = 0; r < n; r++) {
//     let rowPrint = "";
//     const poundHighIndex = midpoint + r;
//     const poundLowIndex = midpoint - r;
//     for (let c = 0; c < columnWidth; c++) {
//       if (c >= poundLowIndex && c<= poundHighIndex) {
//         rowPrint += '#';
//       } else {
//         rowPrint += ' ';
//       }
//     }
//     console.log(rowPrint);
//   }
// }

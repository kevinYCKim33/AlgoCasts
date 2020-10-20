// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// mine from his pseudocode
// function matrix(n) {
//   const results = [];
//   let counter = 1;
//   let sc = 0;
//   let ec = n - 1;
//   let sr = 0;
//   let er = n - 1;


//   for (let i = 0; i < n; i++) {
//     results.push(Array(n));
//   }

//   while (sc <= ec && sr <= er) {
//     for (let i = sc; i <= ec; i++) {
//       results[sr][i] = counter;
//       counter++;
//     }
//     sr++;
//     for (let i = sr; i <= er; i++) {
//       results[i][ec] = counter;
//       counter++;
//     }
//     ec--;
//     for (let i = ec; i >= sc; i--) {
//       results[er][i] = counter;
//       counter++;
//     }
//     er--;
//     for (let i = er; i >= sr; i--) {
//       results[i][sc] = counter;
//       counter++;
//     }
//     sc++;
//   }
//   return results;
// }

// grider looks near identical...
function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top Row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right Column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
    
    // Bottom Row
    for (let i = endColumn; i>= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // Left Column
    for (let i = endRow; i>= startRow; i--) {
      results[i][endColumn] = counter;
      counter++
    }
    startColumn++;
  }
  return results;
}

module.exports = matrix;

// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// have an array...
// i wanna use splice...
// and a while loop
// just splice and push...

function chunk(array, size) {
  const chunks = [];
  while (array.length > 0) {
    chunks.push(array.splice(0, size));
  }
  return chunks;
}

// function chunk(array, size) {
//   const chunks = [];
//   let index = 0;
//   while (index < array.length) {
//     chunks.push(array.slice(index, index + size));
//     index += size;
//   }
//   return chunks;
// }

module.exports = chunk;

// function chunk(arr, n) {
//   // have some array where we keep spliced arrays
//   const trashedArr = [];
//
//   const clonedArr = Array.from(arr);
//   // splice through the array until the array doesn't have any more length;
//   while (clonedArr.length) {
//     let splicedArr = clonedArr.splice(0, n);
//     trashedArr.push(splicedArr);
//   }
//   return trashedArr;
// }

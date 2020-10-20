// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// GRIDER HIGH LEVEL OVERVIEW
// counters = [1, 3, 2]
// array = [20, 's'];
// when encountering s, create a new counter element, set it to 0 and push
// keep going until you only have 's' left in array


// GRIDER SOLUTION
function levelWidth(root) {
  const array = [root, 's'];
  const counters = [0];
  while (array.length > 1) { // when there's something more than 's'
    let node = array.shift();
    if (node === 's') { // we hit a new row
      array.push('s');
      counters.push(0); // start a new counter for new row
    } else { // working with actual node
    array.push(...node.children); // also handles case where the node doesn't have children
    counters[counters.length - 1]++; // increment last counter value
    }
  }
  return counters;
}

// MINE 9/2019
// function levelWidth(root) {
//   const counters = [1];
//   const tempArray = ['s'];
	
// 	if (root.children.length) {
// 		tempArray.unshift(...root.children);
//     counters.push(0);
// 	}
	
// 	let node = root;
	
// 	while (tempArray.length > 1) {
// 		node = tempArray.shift();
//     if (node == 's') {
//       tempArray.push('s');
//       counters[counters.length] = 0;
//     } else {
// 			 if (node.children.length) {
// 				tempArray.push(...node.children);
// 			 }
// 			 counters[counters.length - 1]++;
//     }
//   }
//   return counters;
// }

module.exports = levelWidth;

// function levelWidth(root) {
//   const counters = [0];
//   const array = [root, 's'];
//   while (array.length > 1) {
//     let node = array.shift();
//     if (node === 's') {
//       array.push('s');
//       counters.push(0);
//     } else {
//     array.push(...node.children);
//     counters[counters.length - 1] += 1;
//     }
//   }
//   return counters;
// }

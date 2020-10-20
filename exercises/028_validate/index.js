// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  // moving to the left side of the node
  // everything under it CANNOT be greater than the max value
  // if the max value is set, and the node's data is greater than the max value...
    // something is wrong...
  if (max !== null && node.data > max) {
    return false;
  }

  // moving to the right side of the node
  // everything under it CANNOT be less than the max value
  // if the min value is set, and the node's data is less than the min value...
    // something is wrong...
  if (min !== null && node.data < min) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}





module.exports = validate;






















// MY ATTEMPT GOT IT TO PASS WITH CHROME
// function validate(node, min = null, max = null) {
//   if (node.data < min || node.data > max && max !== null) {
//     return false;
//   }
//
//   if (node.left && node.left.data < node.data ) {
//     max = node.data;
//     return validate(node.left, min, max);
//   }
//
//   if (node.right && node.right.data > node.data) {
//     min = node.data;
//     return validate(node.right, min, max);
//   }
//
//   return true;
// }

// GRIDER
// function validate(node, min = null, max = null) {
//   if (max !== null && node.data > max) {
//     return false;
//   }

//   if (min !== null && node.data < min) {
//     return false;
//   }

//   if (node.left && !validate(node.left, min, node.data)) {
//     return false;
//   }

//   if (node.right && !validate(node.right, node.data, max)) {
//     return false;
//   }

//   return true;
// }
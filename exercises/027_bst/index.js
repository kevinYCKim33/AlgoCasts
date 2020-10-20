// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  // TLDR: recurse if left or right children present, insert new node otherwise
  insert(data) {
    // if data is less than 'this' node data
      // A: AND also 'this' node's left data is null...
        // const newNode = new Node(data);
        // set this.left = newNode
      // B: BUT 'this' node's left data is taken...
        // recurse and call insert on this.left(data)
    
    // if data is greater than 'this' node data
      // A: AND also 'this' node's right data is null...
        // const newNode = new Node(data);
        // set this.right = newNode
      // B: BUT 'this' node's right data is taken...
        // recurse and call insert on this.right(data)
    
    // MINE 9/2019
    if (data <= this.data) {
      if (!this.left) {
        this.left = new Node(data);
      } else {
        this.left.insert(data);
      }
    }

    if (data > this.data) {
      if (!this.right) {
        this.right = new Node(data);
      } else {
        this.right.insert(data);
      }
    }
  }

  contains(data) {
    // the data matches this.node's data
      // return true and exit
    // the data is less than this.node's data
      // does the node have a left node present?
        // Y: then recurse on this.node's left node
        // N: then return false and exit
    // the data is greater than this.node's data
      // does the node have a right node present?
        // Y: then recurse on this.node's right node
        // N: then return false and exit
    
    if (data === this.data) return this;

    if (data < this.data) {
      if (this.left) {
        // when to return and not to return with recursion?
        // if the function itself needs to return a value...
        // it should return...
        // otherwise...i.e. insertion...it does not require return
        return this.left.contains(data);
      } else {
       return null; 
      }
    }

    if (data > this.data) {
      if (this.right) {
        return this.right.contains(data);
      } else {
       return null; 
      }
    }
  }
}



module.exports = Node;

// GRIDER's seem cleaner
// class Node {

//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }

//   insert(data) {
//     if (data < this.data && this.left) {
//       this.left.insert(data);
//     } else if (data < this.data) {
//       this.left = new Node(data);
//     } else if (data > this.data && this.right) {
//       this.right.insert(data);
//     } else if (data > this.data) {
//       this.right = new Node(data);
//     }
//   }

//   contains(data) {
//     if (data === this.data) {
//       return this;
//     }

//     if (data < this.data && this.left) {
//       return this.left.contains(data);
//     } else if (data > this.data && this.right) {
//       return this.right.contains(data);
//     }
//     return null;
//   }
// }
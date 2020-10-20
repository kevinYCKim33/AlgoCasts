// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => {
      node.data !== data;
    })
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.push(...node.children);
      // for (let child of node.children) {
      //   arr.push(child);
      // }
      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      // put the node's children first
        //basically have them cut
      arr.unshift(...node.children);

      // for (let child of node.children) {
      //   arr.unshift(child);
      // }

      //then do something with this node (not its children)
      fn(node);
    }
  }
}

// module.exports = { Tree, Node };

//         a
//       / |  \
//      b  c   d
//     /  /\  /\
//    e  f g h i
//    |  |
//    j  k

const bfLetters = [];
const dfLetters = [];

const tree = new Tree();
tree.root = new Node('a');
tree.root.add('b');
tree.root.add('c');
tree.root.add('d');
tree.root.children[0].add('e');
tree.root.children[1].add('f');
tree.root.children[1].add('g');
tree.root.children[2].add('h');
tree.root.children[2].add('i');
tree.root.children[0].children[0].add('j');
tree.root.children[1].children[0].add('k');

tree.traverseBF(node => {
  bfLetters.push(node.data);
})

console.log('breadth-first: ', bfLetters); // a, b, c, d, e, f, g, h, i

tree.traverseDF(node => {
  dfLetters.push(node.data);
})

console.log('depth-first: ', dfLetters); // a, b, e, j, c, f, k, g, d, h, i

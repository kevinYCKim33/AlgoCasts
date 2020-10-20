// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insertFirst(data) {
    // this.head = new Node(data, this.head);
    // retroactive improvement
    this.insertAt(data, 0);
  }

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
     count++;
     currentNode = currentNode.next;
    } 
    return count;
  }

  getFirst() {
    // return this.head;
    return this.getAt(0);
  }

  getLast() {
    // if (!this.head) return null;
    // let currentNode = this.head;
    // while (currentNode.next) {
    //   currentNode = currentNode.next;
    // }
    // return currentNode;
    return this.getAt(this.size() - 1);
  }

  // in theory...its snake may be floating around in memory...but who cares??
  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }
  
  // set the second to last node's next pointer to null
  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let trailingNode = this.head;
    let leadingNode = trailingNode.next;
    while(leadingNode.next) {
      trailingNode = leadingNode;
      leadingNode = leadingNode.next;
    }
    trailingNode.next = null;
  }

  insertLast(data) {
    const newNode = new Node(data);
    let lastNode = this.getLast();
    if (lastNode) {
      lastNode.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  getAt(index) {
    // GRIDER
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
    // Mine
    // if (!this.head) return null;
    // let counter = 0;
    // let currentNode = this.head;
    // while (counter < index) {
    //   currentNode = currentNode.next;
    //   if (!currentNode) return null;
    //   counter++;
    // }
    // return currentNode;
  }

  removeAt(index) {
    // get ahold of the node after...
    // take note of the node before...
    // the previous node should now point to the node just after the removing node

    // EDGE CASE 1: NO NODES
    if (!this.head) return;

    // EDGE CASE 2: REMOVE ONE AND ONLY NODE
    if (index == 0) {
      this.removeFirst();
      // GRIDER
      // this.head = this.head.next; //oddd....
      return;
    }
    
    // MINE
    // getAt() handles out of bounds, lastNode
    // const previousNode = this.getAt(index - 1); // there will always be a previous node after EC 1 & 2
    // const nextNode = this.getAt(index + 1); // goes to null if there is no next node
    // previousNode.next = nextNode;
    
    // GRIDER
    const previousNode = this.getAt(index - 1);
    // the index given does not get lower than this || the index you requested is just one more than the last node
    if (!previousNode || !previousNode.next) {
      return;
    }
    previousNode.next = previousNode.next.next;
  }

  insertAt(data, index) {
    // get ahold of node before the index...
    // take note of the immediately following node.
    // create a new node
    // have new node point to the following node
    // have previous node point to the new node

    // MINE
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index == 0) {
      // this.insertFirst(data);
      this.head = new Node(data, this.head);
      return;
    }
    const previousNode = this.getAt(index - 1) || this.getLast();
    // getLast() if index requested is out of bounds...just add new node to end of list
    const currentNode = previousNode.next;
    const newNode = new Node(data, currentNode);
    previousNode.next = newNode;

    // GRIDER
    // if (!this.head) {
    //   this.head = new Node(data);
    //   return;
    // }

    // if (index === 0) {
    //   this.head = new Node(data, this.head);
    //   return;
    // }

    // const previous = this.getAt(index - 1) || this.getLast();
    // const node = new Node(data, previous.next);
    // previous.next = node;
  }

  forEach(cb) {
    let node = this.head;
    let counter = 0;
    while (node) {
      cb(node, counter);
      node = node.next;
    }
  }

  // this enables for (let node of l) syntax to work
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node; // yield the node to the iterator/generator
      // subject the node to whatever the user does inside the for of loop
      node = node.next;
    }
  }





}

module.exports = { Node, LinkedList };
// jest 021_linkedlist/test.js --watch
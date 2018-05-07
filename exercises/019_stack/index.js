// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;

// stacks very similar to queues

// extraordinarily similar to a queue

// ordered list of records

// adding a record to a stack is called pushing...

// removing a record //called popping

// Queue: First In First Out

// Stack: First In Last Out
  // like putting cookies into a jar...
  // last cookie you put out, is gonna be the first cookie out...

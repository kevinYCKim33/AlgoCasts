// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

// 

function circular(l) {
  let slow = l.head;
  let fast = l.head;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) return true;
  }

  return false;
}

module.exports = circular;

// 8/2018
// function circular(list) {
  //   let slow = list.getFirst();
  //   let fast = list.getFirst();
  //   while (fast.next && fast.next.next) {
  //     fast = fast.next.next;
  //     slow = slow.next;
  //     if (slow === fast) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

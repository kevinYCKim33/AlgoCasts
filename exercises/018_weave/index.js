// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

//just keep popping the last element of q1 and q2 inalternating fashionuntil
// one of them runs out...
// check which one still has length...
// then keep popping its queue till it's gone.

// much cleaner
// why didn't i use peek?
function weave(sourceOne, sourceTwo) {
  const q = new Queue(); //create new one inside

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }
    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }
  return q;
}

module.exports = weave;


// function weave(sourceOne, sourceTwo) {
//   const weavedQ = new Queue(); //create new one inside
//   while (sourceOne.data.length > 0 && sourceTwo.data.length > 0) {
//     weavedQ.add(sourceOne.remove());
//     weavedQ.add(sourceTwo.remove());
//   }
//   let remainingSource;
//   if (sourceOne.data.length > 0) {
//     remainingSource = sourceOne;
//   } else if (sourceTwo.data.length > 0) {
//     remainingSource = sourceTwo;
//   } else if (sourceOne.data.length === 0 && sourceTwo.data.length === 0) {
//     return weavedQ;
//   }
//   while (remainingSource.data.length > 0) {
//     weavedQ.add(remainingSource.remove());
//   }
//   return weavedQ;
// }

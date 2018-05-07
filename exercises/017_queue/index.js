// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

}

module.exports = Queue;


//data structures:
  // ways of organizing information with optimal 'runtime complexity'
  // for adding or removing records
  //
  // JS natively implements several data structures.
  // You will still be asked about 'inferior' data structures


// JS does everything a queue does and so much more...
// they'll still ask you to build a queue from scratch...
// wtf i'm making a queue out of an array?
// first data structure to look at is a queue

//queue is a container of sorts...
  // records enter on one end, and then another
  // waiting in line for movie tickets...
  // waiting in line for a movie is a queue...
  // they'll go at end of line...
  // and their time to emerge out of it to buy tickets...
  // enqueing: adding a records
  // dequeing: removing from a queue:

// First In First out === FIFO
// If A goes in, then A goes out first...

// In interview setting...implement a queue for me...
  // when in JS...we don't have a rudimentary queue
  // JS arrays are super hypertonic function...
  // queue just has a tiny API
  // add to queue: ~~array.unshift();
  // remove from queue: ~~array.pop();

// initialize a Queue Class
  // arrays have shift/unshift/push/pop/splice/slice
  // we first make an array, then hide access so we only
  // take the unshift and pop...
  // taking an array and then sort of handicapping it...
  // irl: some complicated prob...solve problem using a queue
  // a queue would be great...
  // but interact with the queue as an array, the performance goes downhill
  //

//create a new empty queue: const q = new Queue();
// add a record to a queue q.add(1);
// remove record at end of quuee: q.remove();

// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// create a list of zero arrays of size n;
// from the 3rd element on, start adding the previous two nums

function memoize(fn) {
  const cache = {};
  // ...args here is used as REST/GATHER parameter
  // however many arguments provided... fn(1,2,3) 
  // will now become args = [1,2,3]
  return function(...args) {
    if (cache[args]) {
      // cache[[1]] = 3 // => {'1': 3}
      // cache[[1,2]] = 4 // => {'1, 2': 3} //weirdddd but okay...
      return cache[args];
    }
    // const result = fn.apply(null, args); // GRIDER misused this! old pre ES6 trick to spread array out into individual arguments
    // but this SPREAD argument works better
    // at this point...args is an array...
    // ...args here will SPREAD out an array into indivual arguments
    // fn(...[1,2,3]) becomes fn(1,2,3)
    const result = fn(...args); // execute the function
    cache[args] = result; // memoize it for potential future use..

    return result; // then just return the result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);
fib(6);
module.exports = fib;



// function memoize(fn) {
//   // debugger;
//   const cache = {};
//   return function(...args) {
//     // debugger;//idk how many args this would receive
//     if (cache[args]) {
//       // debugger;
//       return cache[args];
//     }
//     const result = fn.apply(this, args); //look up mdn on apply
//     cache[args] = result;

//     return result;
//   }
// }


// function slowFib(n) {
//   // debugger;
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// const fib = memoize(slowFib);
// fib(6);

// MEMOIZATION (MEMO EYE ZATION)
  //store the arguments of each function call along with
  //the result...
  // if function is called again with the same arguments,
  // return the precomputed result, rather than
  // running the function again



// module.exports = fib;

// function fib(n) {
//   let fibArr = [];
//   for (let i = 0; i <= n; i++) {
//     fibArr.push(0);
//   };
//   fibArr[1] = 1;
//   for (let j = 2; j < fibArr.length; j++) {
//     fibArr[j] = fibArr[j - 1] + fibArr[j - 2];
//   }
//   return fibArr.pop();
// }

//STEVE solution
// function fib(n) {
//   const result = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];
//     result.push(a + b);
//   }
//   return result[n];
// }

// for every increase in n, we have to increase by 1...
  //so it's linear...
// well it's just a simple for-loop...
  //1 for 1...chances are, it's linear...

  //STEVE solution
  // cooler but this is 2 ^ n
  // this slightly less than doubles...
  // runtime is exponential time solution
  // they'll ask...can we improve the runtime somehow?
    // you go back iteratively??
    // they want you to say something very particular


  // function fib(n) {
  //   if (n < 2) {
  //     return n;
  //   }
  //
  //   return fib(n - 1) + fib(n - 2);
  // }

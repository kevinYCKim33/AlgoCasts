/**
  Permutation of a Palindrome
    Palindrome: A word that’s spelled the same backwards as it is forwards
    Permutation: A combination of characters, in this case that can be rearranged to qualify as a palindrome
   
  Write a method 'isPalindromePermutation' that takes in a string as a parameter
  and returns a boolean specifying whether the string is a palindrome permutation or not. (case insensitive)
  


  
  
*/



// racceccar
// r: 2,
// a: 2,
// c: 4,
// e: 1

// palindrome rule: 
// odd: you can have one key-val of 1, rest should be even key-vals
// even: there shouldn't be any odd key-vals;

function palinPerm(str) {
  // 1: check if word is even or odd..
  let word = str.toLowerCase().replace(' ', '');
  const isEven = word.length % 2 == 0;
  
  const wordDictionary = {};
  
  for (char of word) {
    if (wordDictionary[char] == undefined) {
      wordDictionary[char] = 1;
    } else {
      wordDictionary[char] += 1;
    }
  }
  
  // return wordDictionary;
  // odd: you can have one key-val of 1, rest should be even key-vals
  // even: there shouldn't be any odd key-vals;
  let oddCount = 0;
    for (word in wordDictionary) {
      if (wordDictionary[word] % 2 != 0) {
        oddCount++;
      }
    }
    return oddCount <= 1;
}

console.log('*******');
console.log(palinPerm('hnahan'), true);
console.log(palinPerm('Tact Coa'), true);
console.log(palinPerm('Tact boa'), false);


// COOL YOUTUBE SOLUTION I REMEMBERED W/O LOOKING

const palinPerm = (phrase) => {
  // lowercase everything
  // remove spaces
  // return cleanedPhrase;
  const wordDictionary = {};
  let phraseCount = 0;

  for (let char of phrase.toLowerCase().replace(/\s/g, "")) {
    if (wordDictionary[char]) {
      delete wordDictionary[char];
    } else {
      wordDictionary[char] = 1;
    }
    phraseCount++;
  }

  if (phraseCount % 2 == 0) {
    return Object.keys(wordDictionary).length == 0;
  } else {
    return Object.keys(wordDictionary).length == 1;
  }

}

// console.log(('a    f').replace(/\s/g, ""));


console.log('*******');
console.log(palinPerm('hnahan'), true);
console.log(palinPerm('Tact Coa'), true);
console.log(palinPerm('Tact boa'), false);




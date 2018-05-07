// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  let maxValue = 0;
  let maxKey;

  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  };

  for (let char in chars) {
    if (chars[char] >= maxValue) {
      maxValue = chars[char];
      maxKey = char;
    };
  };
  return maxKey;
}

module.exports = maxChar;

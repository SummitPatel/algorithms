/*
 * The algorithm finds the rank of a word starting from the end. If the word is
 * 'BACD', it will first rank the word 'D', followed by 'CD', and so forth,
 * calculating the rank of each subword and storing that rank to build up to
 * initial word given. It runs in O(N^2) time.
 */

// This is for node.js to get input from the commandline
var word = process.argv[2];

var wordRank = function(word) {
  var length = word.length;
  if(length > 25) {
    console.log('Word too big! Please enter something under 25 characters.');
    return;
  }

  // Give the word an initial rank of 1
  var rank = 1;
  // All the different perms of subwords, starting from the end of the initial word
  var suffixWordPermutations = 1;
  // Holds the number of times a letter appears in the initial word
  var letterCounts = {};

  for(var i = length - 1; i > -1; i--) {
    var currentLetter = word.charAt(i);

    // If we've seen the letter before, increase the count by 1.
    // If not, we'll insert it into the dictionary with a count of 1
    var charCount = letterCounts.hasOwnProperty(currentLetter) ? letterCounts[currentLetter] + 1 : 1;
    letterCounts[currentLetter] = charCount;

    // Now we check our dictionary of the letters we've already seen
    for(var letter in letterCounts) {
      if(letter < currentLetter) {
        // We increase the rank only if the current letter we're looking at is 'larger' than
        // a letter we've already seen. 'B' is larger than 'A' (2 > 1), so we increase the rank
        // because we've already seen 'A' in our subword. We calculate all the combinations of
        // subwords that exist and add it to the current rank.
        rank += suffixWordPermutations * letterCounts[letter] / charCount;
      }
    }
    // Multiply to calculate the factorial of our current subword
    // i.e. will multiply by 1 when subword is 'D', by 2 when 'CD', etc.
    suffixWordPermutations *= length - i;

    // And then divide by the number of times we've already seen the letter to account
    // for duplicate letters in our permutations
    suffixWordPermutations /= charCount;
  }
  return rank;
};

console.log(word + '\'s rank is: ' + wordRank(word));

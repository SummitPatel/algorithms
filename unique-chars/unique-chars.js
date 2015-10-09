'use strict';

var myString = 'abcd';

// this version doesn't use any additional data structures and operates in place.
// it runs in O(n^2)
function uniqueCharsInPlace(str) {
  for(var i = 0; i < str.length; i++) {
    for(var j = 0; j < str.length; j++) {
      if(i !== j) {
        if(str[i] === str[j]) {
          return false;
        }
      }
    }
  }
  return true;
}

console.log(uniqueCharsInPlace(myString));

// this version uses a dictionary to keep track of seen characters
// it runs in O(n)
function uniqueChars(str) {
  var seenChars = {};

  for(var i = 0; i < str.length; i++) {
    var current = str[i];
    if(seenChars[current]) {
      return false;
    }
    else {
      seenChars[current] = true;
    }
  }
  return true;
}

console.log(uniqueChars(myString));

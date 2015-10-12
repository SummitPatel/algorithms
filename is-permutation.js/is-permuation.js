'use strict';

// Runs in O(n) time
function isPerm(first, second) {

  if(first.length !== second.length) {
    return false;
  }

  var hashTable = {};

  for (var i in first) {
    if(hashTable[i] > 0) {
      hashTable[i]++;
    }
    else {
      hashTable[i] = 0;
    }
  }

  for (var j in second) {
    if(hashTable[j] > 0) {
      hashTable[j]--;
    }
    else if(hashTable[j] === 0) {
      hashTable[j] = null;
    }
    else {
      return false;
    }
  }
  return true;
}

console.log(isPerm('summit', 'timmus'));

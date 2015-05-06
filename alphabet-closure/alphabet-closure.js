/*
* Every time the function is called, 'i' is incremented so that the next letter of the alphabet is printed.
* This is an example of a basic closure. The outer function is called immediately by wrapping it in ()
* and the () call at the end, so that 'letters' and 'i' are stored within the scope of the outer function. 
*/

var alphabetClosure = (function() {
  var letters = 'abcdefghijklmnopqrstuvwxyz';
  var i = -1;

  return function() {
    i++;
    return letters[i];
  }
})();

for (var i = 0; i < 26; i++) {
  console.log(alphabetClosure());
};

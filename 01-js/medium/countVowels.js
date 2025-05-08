/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowelsCount = 0;
  const charactersArray = str.toLowerCase().split("");
  let vowels = ["a", "e", "i", "o", "u"];
  charactersArray.forEach((character) => {
    vowels.forEach((vowel) => {
      if (vowel === character) {
        vowelsCount += 1;
      }
    });
  });
  console.log(vowelsCount)
  return vowelsCount;
}

module.exports = countVowels;


/* PASS  01-js/tests/countVowels.test.js
  countVowels
    √ returns the correct count for strings with vowels (28 ms)                                                                                                       
    √ returns 0 for strings without vowels (10 ms)
    √ returns 0 for an empty string (3 ms)                                                                                                                            
    √ handles case-insensitivity correctly (11 ms)                                                                                                                    
    √ returns the correct count for strings with spaces (12 ms)                                                                                                       
    √ returns the correct count for strings with punctuation marks (11 ms)                                                                                            
                                                                                                                                                                      
Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        0.96 s
Ran all test suites matching /.\\tests\\countVowels.test.js/i.*/

// 1) Sum Zero
// Write a function that takes in an array of numbers. 
// The function should return True if any two numberss in list sum to 0, and false otherwise.

let array = [28, 43, 12, 30, 4, 0, 12]

let value = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true;
      } 
    }
  }
}

console.log(value)

// ***// runtime = 0(n) 






// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word 
// contains only unique characters. Return False otherwise.


function uniqueCharacters(str) {
     
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if (str[i] == str[j])
                return false;
 
    
                else return true
        }
    }
}

// console.log(uniqueCharacters('hello'))

// ***// runtime = 0(n) 


// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at 
// least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.


function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

  console.log(isPangram('The quick brown fox jumps over the lazy dog'))

//   ***// runtime = 0(1) 




// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the
//  length of the longest one.

function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

//   ***// runtime = 0(n) 
// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

function LongestWord(sen) { 
    const words = sen.replace(/[^\w\s]|_/g, "").split(' ');
    let counter = 0, word ='';
    // for (let index = 0; index < words.length; index++) {
    //     if(counter <= words[index].length) {
    //        if(word.length < words[index].length){
    //           word = words[index];
    //        }
    //         counter += 1;
    //     }
    // }
    const a = words.sort((a, b) => {
        return b.length - a.length;
    });
    return a; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord("a confusing /:sentence:/[ this is not!!!!!!!~"));
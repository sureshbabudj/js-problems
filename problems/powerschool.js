const CountingAnagrams = (str) => {
    // Set() helps to remove all the duplicates
    const wordUnique = new Set(str.split(/\s+/)),
      wordArray = Array.from(wordUnique),
      hash = {};
    let count = 0;
    
    
    wordArray.forEach((word) => {
      // Key will be the sorted word e.g. cba will become abc
      let key = word.split('').sort().join('');
      
      // If there is an anagram they will have the same key so whenever the key is avaialable in the hash count will be updated
      if (key in hash) {
        count += 1;
      }
      else {
        // true is assigned just for making the key available in the hash
        hash[key] = true;
      }
    });
    
    return count;
  };
  
  console.log("cars are very cool so are acrqs and my os", CountingAnagrams("cars are very cool so are arcs and my os"));
  // console.log("aa aa odg dog gdo", CountingAnagrams("aa aa odg dog gdo"));
  // console.log("a c b c run urn urn", CountingAnagrams("a c b c run urn urn"));
function anagram(sentence) {
  const hash = {};
  let count = 0;
  const words = new Set(sentence.trim().split(" "));
  for (let word of words) {
    const key = word.split("").sort().join("");
    key in hash ? count++ : (hash[key] = word);
  }
  return count;
}

console.log("result:", anagram("cars are very cool so are arcs and my os"));

const printFractions = (max_d) => {
  const fractions = [];
  for (var i = 1; i < max_d; i++) {
    for (var j = i + 1; j <= max_d; j++) {
      if (reducer(i, j) == 1) {
        let frac = `${i}/${j}`;
        console.log(frac);
        fractions.push(frac);
      }
    }
  }
  return fractions.length;
};

const reducer = (a, b) => (b == 0 ? a : reducer(b, a % b));
console.log(printFractions(8));

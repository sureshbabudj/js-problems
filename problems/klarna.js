function shiftedDiff(first, second) {
    const arr = [...second];
    let rotations = -1;
    arr.forEach((item, index) => {
        if (first === arr.join(''))
            rotations = index;
        arr.push(arr.shift());
    });
    return rotations;
}

console.log(shiftedDiff('coffee', 'eecoff')); // 2
console.log(shiftedDiff('eecoff', 'coffee')); // 4
console.log(shiftedDiff('moose', 'Moose')); // -1
console.log(shiftedDiff("isn't", "'tisn")); // 2
console.log(shiftedDiff('Esham', 'Esham')); // 0
console.log(shiftedDiff('dog', 'god')); // -1
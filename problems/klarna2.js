function orderByWeight(strng) {
    return strng[0].split(' ').sort((a, b) =>{
        let sumOfA = weights(a);
        let sumOfB = weights(b);
        return sumOfA === sumOfB ? a.localeCompare(b) : sumOfA - sumOfB;
    });
}

function weights(num) {
    return num.split('').reduce((sum, el) => (sum + (+el)), 0);
 }

const result = orderByWeight(["56 65 74 100 99 68 86 180 90"]);
console.log(result);
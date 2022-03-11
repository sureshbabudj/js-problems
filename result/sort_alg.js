// sorting function should be a pure function
// pure function will not alter the passed argeuments or dependent on outside entities

const arr = [3, 1, 5, 0, 2, 1, 121, 85, 4, 7];

// bubble sort - compare 2 adjacent items and swap if the 2nd item lesser than the 1st item
// O(N²) — Quadratic Time:
function bubbleSort(array) {
    // not to alter passed array, clone the array with slice operation
    const arr = array.slice();
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            } 
        }
    }
    return arr;
}

console.log('bubbleSort: ', bubbleSort(arr)); // [0, 1, 1,  2,   3, 4, 5, 7, 85, 121]

// selection sort - take the min value and swap with 1st value
// O(N²) — Quadratic Time:
function selectonSort(array) {
    const arr = array.slice();
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;  
        for (let j = i; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    return arr;
}
console.log('selectionSort: ', selectonSort(arr)); // [0, 1, 1,  2,   3, 4, 5, 7, 85, 121]

// insertion sort - take each value in the array compare with its previous positions 
// and if less than prev pos swap with those prev values or break from inner loop
// O(N²) — Quadratic Time:  in avg and worst cases
function insertionSort(array) {
    const arr = array.slice();
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j-1] > arr[j]) {
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
            } else {
                break;
            }
        }
    }
    return arr;
}
console.log('insertionSort: ', insertionSort(arr)); // [0, 1, 1,  2,   3, 4, 5, 7, 85, 121]

// quick sort - devide and ocnquer - recursive pattern
// O(Nlog(N)) — effiecient
function quickSort(array) {
    if (array.length <= 1) return array;
    let pivot = array[array.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < array.length - 1; i++) {
        if (pivot > array[i]) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log('quickSort: ', quickSort(arr)); // [0, 1, 1,  2,   3, 4, 5, 7, 85, 121]

// merge sort helper
function mergeSortHelper(arr1, arr2) {
    const res = [];
    let arrIndex1 = 0,arrIndex2 = 0;
    while (arrIndex1 < arr1.length && arrIndex2 < arr2.length) {
        if (arr1[arrIndex1] > arr2[arrIndex2]) {
            res.push(arr2[arrIndex2]);
            arrIndex2++;
        } else {
            res.push(arr1[arrIndex1]);
            arrIndex1++;
        }
    }
    return [...res, ...arr1.slice(arrIndex1), ...arr2.slice(arrIndex2)];
}

// merge sort
function mergeSort(array) {
    if (array.length <= 1) return array;
    const mid = Math.floor(array.length / 2);
    const first = array.slice(0, mid);
    const second = array.slice(mid);
    return mergeSortHelper(mergeSort(first), mergeSort(second));
}

console.log('mergeSort: ', mergeSort(arr)); // [0, 1, 1,  2,   3, 4, 5, 7, 85, 121]

console.log('original arr: ', arr); // original arr
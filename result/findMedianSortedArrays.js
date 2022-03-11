/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays1(nums1, nums2) {
    const merged = [...nums1, ...nums2];
    // js in-built sort
    merged.sort((a, b) => a - b);
    if (merged.length % 2 === 0) {
        return (merged[merged.length / 2] + merged[merged.length / 2 - 1]) / 2;
    } else {
        return merged[Math.floor(merged.length / 2)];
    }
};

function findMedianSortedArrays(nums1, nums2) {
    const merged =  [...nums1, ...nums2]; // Array(nums1.length + nums2.length).fill(0);
    // bubble sort
    for (let i = 0; i < merged.length - 1; i++) {
        for (let j = 0; j < merged.length - 1 - i; j++) {
            if (merged[j] > merged[j+1]) {
                [merged[j], merged[j+1]] = [merged[j+1], merged[j]]
            }
        }
    }
    if (merged.length % 2 === 0) {
        return (merged[merged.length / 2] + merged[merged.length / 2 - 1]) / 2;
    } else {
        return merged[Math.floor(merged.length / 2)];
    }
}

const mergeSort = function(a1, a2) {
    const res = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < a1.length && rightIndex < a2.length) {
        if (a1[leftIndex] > a2[rightIndex]) {
            res.push(a2[rightIndex]);
            rightIndex++;
        } else {
            res.push(a1[leftIndex]);
            leftIndex++;
        }
    }
    return [...res, ...a1.slice(leftIndex), ...a2.slice(rightIndex)];
}
function findMedianSortedArrays(nums1, nums2) {
    const merged = mergeSort(nums1, nums2);
    console.log(merged);
    if (merged.length % 2 === 0) {
        return (merged[merged.length / 2] + merged[merged.length / 2 - 1]) / 2;
    } else {
        return merged[Math.floor(merged.length / 2)];
    }
}



// console.log(findMedianSortedArrays ([1,2], [3,4]) === 2.5);
console.log(findMedianSortedArrays ([1,3], [2]) === 2);


//  1 3    2   l = 0; r = 0;
// 1 > 2 => [1]  l = 1; r = 0;
// 3 > 2 => [1, 2]  l =1; r = 1;
//  

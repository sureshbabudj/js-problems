function findDuplicate(arr1, arr2) {
    let isFound = false;
    for(let i = 0; i <= arr1.length; i++){
        if(arr2.includes(arr1[i])) {
            isFound = true;
        }
    }
    return isFound;
}

console.log(findDuplicate([2,4],[1,5,3,12]));
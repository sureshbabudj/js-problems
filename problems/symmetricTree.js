// Symmetric Tree
// Have the function SymmetricTree(strArr) take the array of strings stored in strArr, which will represent a binary tree, and determine if the tree is symmetric (a mirror image of itself). The array will be implemented similar to how a binary heap is implemented, except the tree may not be complete and NULL nodes on any level of the tree will be represented with a #. For example: if strArr is ["1", "2", "2", "3", "#", "#", "3"] then this tree looks like the following:

// For the input above, your program should return the string true because the binary tree is symmetric.
// Examples
// Input: ["4", "3", "4"]
// Output: false

function SymmetricTree(strArr) {
    revarr = strArr.reverse();
    line = 1;
    while(revarr.length){
        let splice = revarr.splice(revarr.length - line);
        if(splice.join("") !== splice.reverse().join("")){
            return false;
        }
        line=line*2;
    }
    return true;
}

     
  // keep this function call here 
  console.log(SymmetricTree(["1", "2", "2", "3", "#", "#", "3"]));

  /*    3   #   #   3   2   2   1
        ^

  */
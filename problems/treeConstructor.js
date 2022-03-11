function TreeConstructor(strArr) { 

   // what is binary tree 
   // 1. parents have ut most 2 childrens
   // 2. each children should have atmost prent

    const parents = {};
    const childrens = {};
  
    for(let i = 0; i < strArr.length; i++) {
      //console.log(strArr[i]);
      let formatted = strArr[i].replace(/[()]/g,' ').split(',');
      const child = formatted[0];
      const parent = formatted[1];
      
      if(parents[parent]) {
        parents[parent].push(child);
      } else {
        parents[parent] = [child];
      }
      if(parents[parent].length > 2) {
        return false;
      }
  
      if(childrens[child]) {
        return false;
      } else {
        childrens[child] = parent;
      }
  
    }
  
    return true; 
  
  }
     
  // keep this function call here 
  console.log(TreeConstructor(["(1,2)", "(2,4)", "(2,7)", "(7,2)", "(9,5)"]));
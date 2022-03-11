function capitalizeFirst (arr) { 
  let res = []; 
  if (!arr.length) { 
      return res.reverse(); 
  } 
  let l = arr.shift(); 
  res.push(l.charAt(0).toUpperCase() + l.slice(1)); 
  return [...res, ...capitalizeFirst(arr)]; 
} 
 
capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
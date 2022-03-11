function reverse(s){ 
  let rs = ''; 
  const helper = (m) => { 
     if (!m.length) { 
       return; 
     } 
     rs += m.pop(); 
     helper(m); 
  } 
  helper(Array.from(s)); 
  return rs; 
} 
 
console.log(reverse('awesome') === 'emosewa'); // true 
console.log(reverse('rithmschool') === 'loohcsmhtir'); // true
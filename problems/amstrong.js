// 373: 3^3 + 7^3 + 3^3 = 373 


function checkArmstrong(power) {
  let result = input.toString().split('').reduce((acc, curr) =>{
	acc += Math.pow(curr, 3);
	return acc;
  },0);
  return result === input ? true: false;
}

console.log(checkArmstrong(373));

// check armstronhg number

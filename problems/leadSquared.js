
// function findNoOfTimes(txt, searchText) {
//     let result = 0;
//     const tmpArr = txt.split(' ');
//     tmpArr.forEach((item) => {
//         item = sanitize(item);
//         console.log(item);
//         if (item.toLowerCase() === searchText.toLowerCase()) {
//             result++;
//         }
//     });
//     return result;
// }

// function sanitize(item) {
//     const delimeter = [',','.'];
//     const a = item.split('');
//     delimeter.forEach((deli) => {
//         if(a.indexOf(item)) {
//             item = item.replace(item, '');
//         }
//     });
//     return item;
// }


// const txt = 'Lorem.';
// const searchText = 'lorem';
// const result = findNoOfTimes(txt, searchText);
// console.log(result);
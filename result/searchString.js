// binary search and return the index of the string on the array or -1 
function searchString(arr, str) { 
    let first = 0; 
    let last = arr.length -1; 
    let mid = Math.floor(last / 2); 
    while (arr[mid] !== str && first < last) { 
        if (str.charCodeAt(0) > arr[mid].charCodeAt(0)) { 
            first = mid + 1; 
        } else { 
            last = mid - 1; 
        } 
         mid = Math.floor((first + last) / 2); 
    } 
    return arr[mid] !== str ? -1 : mid; 
} 
 
const states = ['Andaman and Nicobar (UT)', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh (UT)', 'Chhattisgarh', 'Dadra and Nagar Haveli (UT)', 'Daman and Diu (UT)', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep (UT)', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Puducherry (UT)', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'] 
console.log(searchString(states, 'Bihar') === states.indexOf('Bihar')); // true 
console.log(searchString(states, 'Bihar1') === states.indexOf('Bihar1')); // -1 
console.log(searchString(states, 'Andaman and Nicobar (UT)') === states.indexOf('Andaman and Nicobar (UT)')); // true 
console.log(searchString(states, 'West Bengal') === states.indexOf('West Bengal')); // true 
console.log(searchString(states, states[states.length / 2 -1]) === states.indexOf(states[states.length / 2 -1])); // true 

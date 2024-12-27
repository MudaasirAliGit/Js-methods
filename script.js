// Task 1: map() Method
// Problem Statement: Ek array [10, 20, 30, 40, 50] diya gaya hai. 
// Is array ke har element ko 5 se multiply karke ek naya array banao.
// Output: [50, 100, 150, 200, 250]
let arr = [10, 20, 30, 40, 50];
let mapedArr = arr.map(function(element){
    return element * 5;
})
console.log(mapedArr);

// Task 2: filter() Method
// Problem Statement: Ek array [15, 26, 33, 40, 18, 29] diya gaya hai. 
// Sirf even numbers ko filter karke ek naya array banao.
// Output: [26, 40, 18]
let arr2 = [15, 26, 33, 40, 18, 29];
let filteredArr = arr2.filter(function(element){
    return element % 2 == 0;
});
console.log(filteredArr);

// Task 3: reduce() Method
// Problem Statement: Ek array [5, 10, 15, 20] diya gaya hai.
//  Is array ke sare elements ka sum calculate karo.
// Output: 50
let arr3 = [5, 10, 15, 20];
let sum = arr3.reduce((num1 , num2) => num1 + num2 , 0);
console.log(sum);

// Task 4: find() Method
// Problem Statement: Ek array [7, 14, 21, 28, 35] diya gaya hai.
//  Is array me pehla number find karo jo 20 se bada ho.
// Output: 21
let arr4 = [7, 14, 21, 28, 35];
let findNumber = arr4.find(number => number > 20);
console.log(findNumber);

// Task 5: findIndex() Method
// Problem Statement: Ek array [3, 5, 7, 9, 11] diya gaya hai.
//  Us element ka index find karo jo 7 ke barabar ho.
// Output: 2
let arr5 = [3, 5, 7, 9, 11];
let indexOfNumber = arr5.findIndex(number => number === 7);
console.log(indexOfNumber);

// Task 6: includes() Method
// Problem Statement: Ek array [12, 24, 36, 48, 60] diya gaya hai.
//  Check karo ki 36 is array me hai ya nahi.
// Output: true
let arr6 = [12, 24, 36, 48, 60];
let isNumberIncludes = arr6.includes(36);
console.log(isNumberIncludes);

// Task 7: indexOf() Method
// Problem Statement: Ek array [1, 2, 3, 4, 2, 5] diya gaya hai.
//  Array me 2 ka index find karo.
// Output: 1
let arr7 = [1, 2, 3, 4, 2, 5];
let findIndexOfNumber = arr7.indexOf(2);
console.log(findIndexOfNumber);

// Task 8: lastIndexOf() Method
// Problem Statement: Ek array [1, 2, 3, 4, 2, 5] diya gaya hai. 
// Array me 2 ka last index find karo.
// Output: 4
let arr8 = [1, 2, 3, 4, 2, 5];
let lastIndex = arr8.lastIndexOf(2);
console.log(lastIndex);

// Tasks Completed!
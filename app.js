// ALGORITHMS 1



/* 
Create a function that takes an array of numbers as its first argument and a target number as its second argument,
There will be only two numbers in that array that add up to the target number, return their indices as an array
by that created function, also the number and its complement number must not be the same number with thesame index


Your approach MUST be
TIME COMPLEXITY: O(n)
SPACE COMPLEXITY: O(n)

*/


const twoSum = (nums, target) => { // nums is an array of numbers, target is a single number
  
  
  const map = new Map(); // creating a new Map object in JavaScript
  

  const numsLength = nums.length;

  for(let i = 0; i<numsLength; i++) { // doing a liner search, iterating through all the numbers in that nums
      
    const num = nums[i]; // storing the number inside num


      if(map.get(num) === undefined) map.set(target-num, i); // first checking if its complement number's index is already inside our map, if not, save it's index for its complement  number
      else return [map.get(num), i]; // if yes, return its complement number's index and its index
  }
};






// Testing the function
const res = twoSum([2,7,11,15], 9);
const res1 = twoSum([3,8,17,19], 27);
const res2 = twoSum([5,7,10,25], 35);
const res3 = twoSum([22,34,37,50], 59);
const res4 = twoSum([2, 3, 5, 6], 7);
const res5 = twoSum([13,17,21,25], 38);

// OUTPUTTING the TEST result
console.log(`%c Result is [${  res }]`, `color: red; font-size: 150%`);
console.log(`%c Result is [${  res1 }]`, `color: red; font-size: 150%`);
console.log(`%c Result is [${  res2 }]`, `color: red; font-size: 150%`);
console.log(`%c Result is [${  res3 }]`, `color: red; font-size: 150%`);
console.log(`%c Result is [${  res4 }]`, `color: red; font-size: 150%`);
console.log(`%c Result is [${  res5 }]`, `color: red; font-size: 150%`);



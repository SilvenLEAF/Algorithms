// ALGORITHMS
const twoSum = (nums, target) => { // nums is an array of numbers, target is a single number
  
  
  const map = new Map(); // creating a new Map object in JavaScript
  

  

  for(let i = 0; i<nums.length; i++) { // doing a liner search, iterating through all the numbers in that nums
      
    const num = nums[i]; // storing the number inside num


      if(map.get(num) === undefined) map.set(target-num, i); // first checking if its complement number's index is already inside our map, if not, save it's index for its complement  number
      else return [map.get(num), i]; // if yes, return its complement number's index and its index
  }
};






// Testing the function
const res = twoSum([2,7,11,15], 9);


// OUTPUTTING the TEST result
console.log(`%c Result is [${  res }]`, `color: red; font-size: 150%`);




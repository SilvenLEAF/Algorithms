// ALGORITHMS 4 (Majority Element)

/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2


Your approach MUST be
TIME COMPLEXITY: O(n)
SPACE COMPLEXITY: O(n)
*/





const majorityElement = (nums) => {
  const map = new Map();

  const length = nums.length;
  for(let num of nums){        
      if(map.get(num)){
          map.set(num, map.get(num)+1);
      } else {
          map.set(num, 1);
      }
  };
  
  for(let num of nums){
      
      if(map.get(num) > length/2) return num;
  }  

};






// TESTING the function
const res = majorityElement([2,2,1,1,1,2,2]); //2



// OUTPUTTING the TEST result
console.log(`%c Result is [${  res }]`, `color: red; font-size: 150%`);


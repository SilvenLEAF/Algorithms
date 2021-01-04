// ALGORITHMS 1 (Two Sum)

/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

 

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1


Your approach MUST be
TIME COMPLEXITY: O(n)
SPACE COMPLEXITY: O(n)
*/





var singleNumber = function(nums) {
  let map = {}
  for(let num of nums){
      if(map[num]) map[num]++
      else map[num] = 1
  }
   for(let num of nums){
      if(map[num] === 1) return num
      
  }

};
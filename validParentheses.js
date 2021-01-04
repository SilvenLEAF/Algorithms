// ALGORITHMS 2 (Valid Parentheses)


/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
.     Open brackets must be closed by the same type of brackets.
.     Open brackets must be closed in the correct order.


Your approach MUST be
TIME COMPLEXITY: O(n)
SPACE COMPLEXITY: O(n)

*/
const isValid = (s)=>{
  let stack = [];
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } 
    else {
      if (stack.length === 0) return false;
      let pair = stack.pop() + s[i];
      if (pair !== '()' && pair !== '{}' && pair !== '[]') {
         return false;
      }
    }
  }
  
  return stack.length === 0;  
}






const res = isValid("{[]}");

// OUTPUTTING the TEST result
console.log(`%c Result is [${  res }]`, `color: orangered; font-size: 150%`);


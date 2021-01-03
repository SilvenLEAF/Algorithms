

const isValid = (s)=>{
  let stack = [];


  for(let i=0; i<stack.length; i++){
    if(s[i] === '(' || s[i] === '{' || s[i] === '['){
    
      stack.push(s[i]);
    
    } else {

      if(stack.length === 0) return false;
      let pair = stack.pop() + s[i];

      if(pair !== '()' && pair !== '{}' && pair !== '[]'){
        return false;
      }
    }
  }

  return stack.length === 0;
}



// const isValid = (s)=>{
//   let stack = [];
  
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
//       stack.push(s[i]);
//     } 
//     else {
//       if (stack.length === 0) return false;
//       let pair = stack.pop() + s[i];
//       if (pair !== '()' && pair !== '{}' && pair !== '[]') {
//          return false;
//       }
//     }
//   }
  
//   return stack.length === 0;  
// }






const res = isValid("{[]}");

// OUTPUTTING the TEST result
console.log(`%c Result is [${  res }]`, `color: red; font-size: 150%`);




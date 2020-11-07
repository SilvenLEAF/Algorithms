


const res = patternCounter("ababa")
console.log(res)



//main function
//counts the total number of pattern 
function patternCounter(s) {

  const n = s.length;
  const modulo = 10 ** 9 + 7;
  

  //counting total no of a in the given string
  const countA = s.split('').filter(item => item === 'a').length;



  // if it's not possible to divide into 3 sections
  if (countA % 3) return 0;



  // if there's no a in the given string
  if (countA === 0) return (n-2)*(n-1)/2 % modulo;
  


  
  const portionA = countA/3;
  let firstGap = 0, secondGap = 0, count = 0;


  for (let item of s){
      if (item === 'a') count++;
      else {
          if (count === portionA) firstGap++;
          if (count === portionA*2) secondGap++;
      }
  }
  
  
  return (firstGap+1)*(secondGap+1) % modulo;
};

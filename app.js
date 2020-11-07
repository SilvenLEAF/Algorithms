const numWays = s => {
  const n = s.length;
  const modulo = 1000000007;
  
  //Count the ones and process the limiting cases of ones not being divisible by 3 or there being no ones
  const onesCount = s.split('').filter(c => c === '1').length;
  if (onesCount % 3) return 0;
  else if (onesCount === 0) return (n-2)*(n-1)/2 % modulo;
  
  //Iterate linearly through array and count ones; when the first quota of ones is reached exactly, count the zeroes and do the same for when the second quota is reached exactly
  const onesPortion = onesCount/3;
  let firstFactor = 0, secondFactor = 0, currOnes = 0;
  for (let c of s){
      if (c === '1') currOnes++;
      else {
          if (currOnes === onesPortion) firstFactor++;
          if (currOnes === onesPortion*2) secondFactor++;
      }
  }
  
  //Number of ways to split into 3 parts containing equal amounts of ones are proportional to the amount of zeroes between the quota groups because the partition can exist at any position within the zeroes groups. Add 1 to each zero count because the partition exists on either side of the zeroes.
  return (firstFactor+1)*(secondFactor+1) % modulo;
};
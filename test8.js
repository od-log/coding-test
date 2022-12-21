const foo = (numbers) => {
  let numList = numbers.split(" ")
  let even = 0;
  let odd = 0;
  let only = [];
  
  for (let i = 0; i < 3; i++){
    if (numList[i] % 2 === 0) {
      even += 1;
    } else {
      odd += 1;
    }    
  }

  if (even >= 2) {
    only = numList.filter((item) => item % 2 === 1);
  } else {
    only = numList.filter((item) => item % 2 === 0);
  }
  return numList.indexOf(only.toString())+1;
};

//foo("1 2 1 1")

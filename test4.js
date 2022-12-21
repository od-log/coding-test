const foo = (n) => {
  let num = n;
  while (num > 9) { 
    num = num - sumDigit(num);
  }
  const fruits = [
    'kiwi',
    'pear',
    'kiwi',
    'banana',
    'melon',
    'banana',
    'melon',
    'pineapple',
    'apple',
  ];
  return fruits[num-1];
};

const sumDigit = (num) => (num + '').split('').reduce((acc, curr) => acc + Number(curr), 0);

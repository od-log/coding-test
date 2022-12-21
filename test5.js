const foo = (str) => {
  const regexp = /[aeiou]/g;
  const array = [...str.matchAll(regexp)];
  return array.length;
};

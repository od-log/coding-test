const foo = (ids) => {
  const sortedIds = Array.isArray(ids) && ids.sort((a, b) => a - b);
  let min = 0;
  for (item of sortedIds) {
    if (item > min) {
      return min;
    }
    min += 1;
  }
  return min;
}
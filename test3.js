// 왼쪽팀의 전체 승점을 구하는 코드 
const foo = (games) => {
  let score = 0;
  Array.isArray(games) && games.forEach(item => {
    const myScore = Number(item.slice(0, 1));
    const otherScore = Number(item.slice(2));
    if (myScore > otherScore) {
      score += 3;
    }
    if (myScore === otherScore) {
      score += 1;
    }
  });
  return score;
};

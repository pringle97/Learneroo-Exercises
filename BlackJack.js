//function for returning blackjack score
//given 2 numbers: a, b
//if sum > 21, return 0 
function blackJack(a, b) {
  score = a + b
  if (score > 21) {
    return 0;
  } else {
    return score
  }
}

console.log(blackJack(9, 9))
console.log(blackJack(10, 12))
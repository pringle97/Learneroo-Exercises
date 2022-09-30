function backgammon(a, b) {
  if (a != b) {
    return a + b;
  }  
  if (a == b) {
    return (a + b) * 2;
   }
} 

console.log(backgammon(1, 2));
console.log(backgammon(3, 3));
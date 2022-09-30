function NumberToWord(num) {
  if (num <= 0) {
    return "too small";
  }
  if (num == 1) {
    return "one";
  }
  if (num == 2) {
    return "two";
  }
  if (num == 3) {
    return "three";
  }
  if (num == 4) {
    return "four";
  }
  return "too large";
}

console.log("Test -1: " + NumberToWord(-1));
console.log("Test 0: " + NumberToWord(0));
console.log("Test 1: " + NumberToWord(1));
console.log("Test 2: " + NumberToWord(2));
console.log("Test 3: " + NumberToWord(3));
console.log("Test 4: " + NumberToWord(4));
console.log("Test 5: " + NumberToWord(5));
console.log("Test 6: " + NumberToWord(6));
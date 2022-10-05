//checking if trip was success with gold and pirates parameters
function WasTripSuccessful(gold, pirates) {
  if (gold >= pirates && gold + pirates < 100) {
    return true
    }
  else {
    return false
  }
}

console.log(WasTripSuccessful(40, 50))
console.log(WasTripSuccessful(50, 100))
console.log(WasTripSuccessful(50, 30))
console.log(WasTripSuccessful(0, 0))
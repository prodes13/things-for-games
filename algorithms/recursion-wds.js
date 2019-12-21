function countDownRecusive(n) {
  if(n <= 0) {
    console.log("Finished!")
    return;
  }
  console.log(n);
  countDownRecusive(n-1);
}

function sumRange(n) {
  let total = 0;
  for(let i = n; i > 0; i++) {
    total += i;
  }
  return total;
}

function sumRangeRecursive(n, total = 0) {
  if(n <= 0) {
    return total;
  }
  return sumRangeRecursive(n-1, total + n);
}

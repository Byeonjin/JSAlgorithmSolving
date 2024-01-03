// const fs = require("fs");
// const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let arr = stdin.slice(1).join(" ").split(" ");
let arr = [1, 3, 5, 7];

const isPrimeNumber = (number) => {
  const n = 10000;
  const arr = new Array(1000 + 1).fill(true);

  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i <= n; i++) {
    for (let j = 2 * i; j < arr.length; j += i) {
      if (j % i === 0) {
        arr[j] = false;
      }
    }
  }

  return arr[number];
};

console.log(isPrimeNumber(35));

console.log(arr.filter((ele) => isPrimeNumber(ele)).length);

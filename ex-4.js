function findOdd(nums) {
  // Start coding here
  for (let i = 0; i < nums.length; i++) {
    let count = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count += 1;
      }
    }
    if (count === 0) {
      return nums[i];
    } else if (count % 2 === 1) {
      return nums[i];
    }
  }
}

let result1 = findOdd([0]);
let result2 = findOdd([1, 1, 2]);
let result3 = findOdd([1, 2, 2, 3, 3, 4, 3, 3, 1]);

console.log(result1); // 0
console.log(result2); // 2
console.log(result3); // 4

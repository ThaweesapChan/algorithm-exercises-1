function singleNumber(nums) {
  // Start coding here
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.lenght; j++) {
      if (nums[i] === nums[j]) {
        count += 1;
      }
    }
    if (count === 0) {
      return nums[i];
    }
  }
}
let result1 = singleNumber([2, 2, 1]);
let result2 = singleNumber([4, 1, 2, 1, 2]);
let result3 = singleNumber([10]);

console.log(result1); // 1
console.log(result2); // 4
console.log(result3); // 10
console.log(typeof result1); // "number"

// This is ไม่ easy ละนะ. ieieie

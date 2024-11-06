function runningSum(arr) {
  //Start coding here
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      result[i] = arr[i];
    } else {
      result[i] = result[i - 1] + arr[i];
    }
  }
  return result;
}

let result1 = runningSum([1, 2, 3, 4]);
let result2 = runningSum([3, 1, 2, 10, 1]);

console.log(result1); // [1, 3, 6, 10]
// ผลลัพธ์ข้างต้นเกิดจาก [1, 1+2, 1+2+3, 1+2+3+4]

console.log(result2); // [3, 4, 6, 16, 17]
// ผลลัพธ์ข้างต้นเกิดจาก [3, 3+1, 3+1+2, 3+1+2+10, 3+1+2+10+1]

// This is เกือบจะไม่ easy. ieieie

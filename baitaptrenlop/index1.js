// String interpolation
const name = "hoadv";
const age = 25;
console.log(`Xin chào, tôi là ${name}, năm nay ${age} tuổi.`);

// Multi-line strings
const message = `Đây là dòng đầu tiên
Đây là dòng thứ hai
Và đây là dòng thứ ba`;

// Biểu thức trong template literals
const a = 5;
const b = 10;
console.log(`Tổng của ${a} và ${b} là ${a + b}`);

// Gọi hàm trong template literals
function getCurrentTime() {
  return new Date().toLocaleTimeString();
}
console.log(`Bây giờ là: ${getCurrentTime()}`);
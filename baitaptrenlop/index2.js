const color=["red","green","blue"];
// const red= colors[0]; // red
// console.log(red);
// array destructuring
const [red,green,blue,yellow]=colors;

console.log(red,green,blue,yellow); // red green blue undefined

const numbers=[1,2,3,4,5];
const[,second,,fourth]=numbers;
console.log(second,fourth);
// 2,4 trong numbers

const user=["password","email","age","name"];
// ["email","age", "name"];
// ... (rest)
const [password,...userInfo]=user;
console.log(userInfo);


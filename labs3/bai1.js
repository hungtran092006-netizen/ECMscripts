// Function 1
const multiply = (a, b) => a * b;

// Function 2
const isPositive = number => number >= 0;

// Function 3
const getRandomNumber = () => Math.random();

// Function 4
document.addEventListener("click", () => {
  console.log("Clicked!");
});

// bai2
 const createUser = (name="hung", age="19", isAdmin=false) => ({
    name,
    age,
    isAdmin,
});
console.log(createUser());

// bai3

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

const mergeArrays = (...arrays) => [...arrays.flat()];
const sumAll = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const createProduct = ({
  name = "Unknown",
  price = 0,
  brand = "No brand",
  inStock = true
} = {}) => ({
  name,
  price,
  brand,
  inStock
});
createProduct({ name: "Phone", price: 5000 });


// bai 4
// Tạo hàm shoppingCart với:

// Tham số đầu tiên là tên khách hàng
// Các tham số tiếp theo là các sản phẩm
// Sử dụng rest parameters để thu thập sản phẩm
// Trả về object chứa thông tin đơn hàng
const shoppingCart = (Name, ...products) => ({
  Name,
  products
});

const order = shoppingCart("Alice", "táo", "chuối", "cam");
console.log(order); 

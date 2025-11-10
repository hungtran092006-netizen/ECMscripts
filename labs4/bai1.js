function getFirstLast(array) {
    const [first, , , last] = array;
    console.log(first, last);
     
}

console.log(getFirstLast([1, 2, 3, 4])); // [1, 4]

// bai2
function swapElements(arr) {
  const [ one,two,  third,second , fifth] = arr;
  console.log(one,second,third,two,fifth);
}

console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]

// bai3
const user = {
  id: 1,
  personalInfo: {
    name: "javascript",
    contact: {
      email: "javascript@email.com",
      phone: "123-456-7890",
    },
  },
};

function getUserInfo(user) {
  const {name, contact: {email}} = user.personalInfo;
  console.log({ name, email });
}

console.log(getUserInfo(user));
// { name: 'javascript', email: 'javascript@email.com' }

// bai4
function createProduct({ name, price, category = "general", inStock = true }) {
  console.log({ name, price, category, inStock });
}

const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);
// { name: 'Laptop', price: 999, category: 'general', inStock: true }
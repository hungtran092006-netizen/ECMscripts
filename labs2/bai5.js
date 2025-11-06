// Viết lại object sau sử dụng ES6 enhanced object literals
const width = 100;
const height = 200;
const color = "red";

const rectangle = {
  width,
  height,
  color,
  calculateArea () {
    return this.width * this.height;
  },
  describe: function () {
    return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
  },
  
};
console.log(rectangle.calculateArea()); 
console.log(rectangle.describe()); 

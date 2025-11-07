const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};

const emailTemplate = `
xin chào ${user.firstName} ${user.lastName},
Cảm ơn bạn đã mua sản phẩm ${user.product} của chúng tôi.   
Chi tiết đơn hàng của bạn như sau:
- Sản phẩm: ${user.product}
- Giá: ${user.price} VND
- Ngày đặt hàng: ${user.orderDate}

`; 
console.log(emailTemplate);
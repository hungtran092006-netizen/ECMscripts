function Book(title, author, year, price) {
    return {
        title,
        author,
        year,
        price,

        getBookInfo() {
            return ` ${this.title} - ${this.author} (${this.year}) - Giá: ${this.price}đ`;
        },

        calculateDiscount(phanTramGiam) {
            const giaSauGiam = this.price * (1 - phanTramGiam / 100);
            return ` Giá sau giảm ${phanTramGiam}%: ${giaSauGiam}đ`;
        }
    };
}


const book = Book("JavaScript Cơ Bản", "Bùi Quang Công", 2024, 150000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(20));
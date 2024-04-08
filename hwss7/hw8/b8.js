"use strict";
class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    printBook() {
        console.log(`title: ${this.title}, author: ${this.author}, price: ${this.price}`);
    }
    updateBook(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}
const myBook = new Book("captian american", "abc", 15.00);
console.log("thông tin sách ban đầu");
myBook.printBook();
myBook.updateBook("abc", "d", 10.00);
console.log("thông tin sách sau khi cập nhật");
myBook.printBook();

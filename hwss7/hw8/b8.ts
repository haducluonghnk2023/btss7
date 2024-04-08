class Book {
    title: string;
    author: string;
    price:number;
    constructor( title: string,  author: string,  price:number){
        this.title = title;
        this.author = author;
        this.price = price;
    }
    printBook() : void {
        console.log(`title: ${this.title}, author: ${this.author}, price: ${this.price}`);

    }
    updateBook(title:string,author:string,price:number):void{
        this.title = title;
        this.author = author;
        this.price = price;
    }
}
const myBook : Book = new Book("captian american","abc",15.00);
console.log("thông tin sách ban đầu");

myBook.printBook();

myBook.updateBook("abc","d",10.00);
console.log("thông tin sách sau khi cập nhật");

myBook.printBook();



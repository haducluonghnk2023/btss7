// Mảng kiểu số nguyên
let myArray1: number[] = [1, 2, 3, 4, 5];

// Tuple gồm một số nguyên và một chuỗi
let myTuple1: [number, string] = [10, "Hello"];

// Truy cập và thay đổi phần tử trong mảng
console.log(myArray1[0]);  // Output: 1
myArray1[1] = 10;
console.log(myArray1);  // Output: [1, 10, 3, 4, 5]

// Truy cập và thay đổi phần tử trong tuple
console.log(myTuple1[0]);  // Output: 10
console.log(myTuple1[1]);  // Output: Hello
// Không thể thay đổi kích thước hoặc các phần tử trong tuple
// myTuple.push(4);  // Error

// như vậy ta thấy mảng thì có thể thay đổi kích thước và các phần tử trong mảng
// còn về tuple thì không thể thay đổi kích thước và giá tị các phần tử trong mảng sau khi đã được tạo ra

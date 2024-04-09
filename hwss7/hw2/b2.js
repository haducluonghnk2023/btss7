"use strict";
// Khai báo một mảng kiểu số nguyên
let myArray = [1, 2, 3, 4, 5];
// Truy cập phần tử trong mảng
console.log(myArray[0]); // Output: 1
console.log(myArray[2]); // Output: 3
// Thay đổi phần tử trong mảng
myArray[1] = 10;
console.log(myArray); // Output: [1, 10, 3, 4, 5]
// Thêm phần tử vào mảng
myArray.push(6);
console.log(myArray); // Output: [1, 10, 3, 4, 5, 6]
/********************************** */
// Khai báo một tuple
let myTuple = [10, "Hello", true];
// Truy cập phần tử trong tuple
console.log(myTuple[0]); // Output: 10
console.log(myTuple[1]); // Output: Hello
console.log(myTuple[2]); // Output: true
// Tuple không thể thay đổi kích thước và các phần tử bên trong
// myTuple.push(4);  // Error

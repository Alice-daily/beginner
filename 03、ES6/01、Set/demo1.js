// 1、Set是ES6提供的一个新的数据结构，它跟数组类似，但是Set成员的值都是唯一的，没有重复。
// 2、Set本身是一个构造函数，用来生成Set数据结构：可以接收具有iterable接口的数据结构作为参数
const arr = [1, 2, 1, 2, 3, 4];
const set1 = new Set(arr);
console.log(set1); // Set { 1, 2, 3, 4 }
console.log(set1.size); // 4

const str = '12341';
console.log(new Set(str)); // Set { '1', '2', '3', '4' }

// 3、可以利用Set的这个特性实现数组去重
// 方法1
const newArr1 = Array.from(new Set(arr));
console.log(newArr1); // [ 1, 2, 3, 4 ]
// 方法2
const newArr2 = [...new Set(arr)];
console.log(newArr2); // [ 1, 2, 3, 4 ]

// 4、向Set中加入值的时候不会发生类型转换，因此2和'2'是两个不同的值，都会被加入。
// Set内部判断两个值是否相等使用的是“Same-value equality”，类似于精确相等运算符(===)，
// 区别是NaN等于它本身，而精确相等运算符认为NaN不等于本身
const arr2 = [1, 2, '1', '2', NaN, NaN];
const set2 = new Set(arr2);
console.log(set2); // Set { 1, 2, '1', '2', NaN }
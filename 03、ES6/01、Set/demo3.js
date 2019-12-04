// 应用：使用扩展运算符或者Array.from方法可以将Set转换为Array，这样就可以使用数组的方法了
// 1、扩展运算符与Set结构相结合，可以去除数组的重复成员
let arr1 = [1, 2, 2, 3, 4, 4];
let unique = [...new Set(arr1)];
console.log(unique); // [ 1, 2, 3, 4 ]

// 2、使用Set实现交集、并集、差集
let set1 = new Set([1, 2, 3, 4, 5]);
let set2 = new Set([3, 4, 5, 6, 7]);
// ① 交集
let set3 = new Set([...set1].filter(item => set2.has(item)));
console.log(set3); // Set { 3, 4, 5 }
// ② 并集
let set4 = new Set([...set1, ...set2]);
console.log(set4); // Set { 1, 2, 3, 4, 5, 6, 7 }
// ③ 差集
const arr3 = [...set1].filter(item => !set2.has(item));
const arr4 = [...set2].filter(item => !set1.has(item))
let set5 = new Set([...arr3, ...arr4]);
console.log(set5); // Set { 1, 2, 6, 7 }
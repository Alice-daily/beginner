// Set实例的属性和方法
// 1、属性：
// ① Set.prototype.constructor：构造函数，默认就是Set
// ② Set.prototype.size：返回Set实例的成员总数
// 2、方法：
// 1）操作方法（用于操作数据）：add(value)、delete(value)、has(value)、clear()
// 2）遍历方法（用于遍历成员）：keys()、values()、entries()、forEach()

let set1 = new Set();
// ① add(value)：添加某个数据，并返回Set
const set2 = set1.add(1).add(2).add(2);
console.log(set1.size); // 2
console.log(set2.size); // 2

// ② delete(value)：删除某个数据，并返回一个布尔值，表明是否删除成功
const del1 = set1.delete(1);
console.log(set1.size); // 1
console.log(del1); // true
const del2 = set1.delete(3);
console.log(del2); // false

// ③ has(value)：判断是否存在某个数据，并返回一个布尔值
const has1 = set1.has(2);
console.log(has1); // true
const has2 = set1.has(3);
console.log(has2); // false

// ④ clear()：清空所有成员，没有返回值
set1.clear();
console.log(set1.size); // 0

let set3 = new Set(['green', 'red', 'pink']);

// ⑤ keys()：返回键名的遍历器，Set没有键名只有键值，因此keys()和values()返回结果一致
for (let key of set3.keys()) {
    console.log(key); // green red pink
}

// ⑥ values()：返回键值的遍历器
for (let value of set3.values()) {
    console.log(value); // green red pink
}

// Set结构的默认遍历器接口就是values方法
const flag = Set.prototype[Symbol.iterator] === Set.prototype.values;
console.log(flag); // true

for (let item of set3) { // 遍历结果与values一致
    console.log(item); // green red pink
}

// ⑦ entries：返回键值对的遍历器
for (let entry of set3.entries()) {
    console.log(entry); // [ 'green', 'green' ] [ 'red', 'red' ] [ 'pink', 'pink' ]
}

// ⑧ forEach：返回回调函数遍历每个成员
set3.forEach(item => console.log(item)); // green red pink
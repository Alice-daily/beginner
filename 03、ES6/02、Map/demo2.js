// Map实例的属性和方法
// 1、属性：
// ① size：返回Map中成员的个数
const map1 = new Map([
    ['name', 'lily'],
    ['age', 12]
]);
console.log(map1.size); // 2

// 2、方法：
// 1）操作方法：set(key, value)、get(key)、delete(key)、has(key)、clear()
// 2）遍历方法：keys()、values()、entries()、forEach()
const map2 = new Map();
// ① set(key, value)：设置key所对应的键的键值，并返回Map，如果key已经有值，则修改该值，如果key不存在，则新增
map2.set('title', '学习Map'); // 新增title
map2.set('content', 'Map是一种数据结构'); // 新增content
map2.set('author', 'jjyou'); // 新增author
map2.set('author', 'yjj'); // 修改author
console.log(map2); // Map { 'title' => '学习Map', 'content' => 'Map是一种数据结构', 'author' => 'yjj' }

// ② get(key)：根据key获取对应的键值，不存在则返回undefined
const author = map2.get('author');
console.log(author); // yjj
const date = map2.get('date');
console.log(date); // undefined

// ③ delete(key)：根据key删除对应的键值对，返回一个布尔值，删除成功则返回true，否则返回false
const del1 = map2.delete('author');
console.log(del1); // true
const del2 = map2.delete('date');
console.log(del2); // false

// ④ has(key)：在Map中查找是否存在键名为key的键值对，存在返回true，否只返回false
const has1 = map2.has('content');
console.log(has1); // true
const has2 = map2.has('author');
console.log(has2); // false

// 注意：由于Map中的元素的键名可以为任意数据类型，因此使用has查找时，要注意以下几点：
// 1）has查找时使用的比较算法类似于精确相等运算符，但是NaN等于本身，0等于-0；
// 2）对于引用数据类型，比较的是地址
map2.set(NaN, 'I am NaN');
map2.set(+0, 'through -0 can find me');
map2.set({}, '我是一个对象');

const has3 = map2.has(NaN);
const has4 = map2.has(-0);
const has5 = map2.has({});
console.log(has3, has4, has5); // true true false

// get(key)方法获取键值对时也是使用的和has(key)方法一样的比较算法
const NaNVal = map2.get(NaN); // I am NaN
const zeroVal = map2.get(-0); // through -0 can find me
const objVal = map2.get({}); // undefined
console.log(NaNVal, zeroVal, objVal);

// delete(key)也是一样
const del3 = map2.delete(NaN);
const del4 = map2.delete(0);
const del5 = map2.delete({});
console.log(del3, del4, del5); // true true false

const arr = [];
map2.set(arr, 'I am Array');
const has6 = map2.has(arr); // true
const arrVal = map2.get(arr); // I am Array
const del6 = map2.delete(arr); // true
console.log(has6, arrVal, del6);

// ⑤ clear()：清除Map中的所有元素，无返回
console.log(map1.size); // 2
map1.clear();
console.log(map1.size); // 0

// ⑥ keys()：返回键名的遍历器
for (let key of map2.keys()) {
    console.log(key); // title content {}
}

// ⑦ values()：返回键值的遍历器
for (let value of map2.values()) {
    console.log(value); // 学习Map Map是一种数据结构 我是一个对象
}

// ⑧ entries()：返回键值对的遍历器
for (let entry of map2.entries()) {
    console.log(entry); // [ 'title', '学习Map' ] [ 'content', 'Map是一种数据结构' ] [ {}, '我是一个对象' ]
}
// 通过对entries()返回的键值对集合进行遍历后，发现使用set(key, value)方法向Map中添加数据时，也是将数据以双元素数组的结构[key, value]向Map中添加的

// ⑨ forEach()：返回回调函数遍历每个成员
map2.forEach((value, key) => console.log(value, key));
// 返回结果为：
// 学习Map title
// Map是一种数据结构 content
// 我是一个对象 {}

// Map结构的默认遍历器接口就是entries()方法
const flag = Map.prototype[Symbol.iterator] === Map.prototype.entries;
console.log(flag); // true

for (let item of map2) { // 遍历结果与entries一致
    console.log(item); // [ 'title', '学习Map' ] [ 'content', 'Map是一种数据结构' ] [ {}, '我是一个对象' ]
}
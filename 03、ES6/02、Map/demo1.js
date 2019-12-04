// 1、JS中的对象实质是键值对的集合（Hash结构），但是只能使用字符串作为键值，这给使用上带来了一些限制，
// 为了解决这个问题，ES6提供了Map数据结构。
// Map类似于对象，也是键值对的集合，但是它的键值并不限制为只能是字符串，可以是任意数据类型的值。
// 也就是说对象提供了“字符串-值”的对应，Map结构提供了“值-值”的对应，是一种更完善的Hash结构。

// 2、Map本身也是构造函数，任何具有iterator接口且每个成员都是双元素数组的数据结构都可以作为Map构造函数的参数，用于初始化Map。
// const arr1 = ["name", "Lily"];
// const map1 = new Map(arr1); // arr1是一个数组，具有iterator接口，但是arr1中的元素不是双元素数组，而是字符串，因此无法转换为Map
// console.log(map1); // TypeError: Iterator value name is not an entry object

const arr2 = [
    ["name", "Lily"]
];
const map2 = new Map(arr2); // arr2数组中的每个成员都是双元素数组
console.log(map2); // Map { 'name' => 'Lily' }

// 可以接收Set数据结构
const set = new Set([
    ['name', 'Lily'],
    ["age", 12]
]);
const map3 = new Map(set);
console.log(map3); // Map { 'name' => 'Lily', 'age' => 12 }

// 可以接收Map数据结构
const map4 = new Map(map3);
console.log(map4); // Map { 'name' => 'Lily', 'age' => 12 }
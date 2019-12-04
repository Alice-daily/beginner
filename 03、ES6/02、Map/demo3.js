// Map与其他数据结构的转换
const map = new Map();
map.set('F', 'No');
map.set('T', 'Yes');
console.log(map); // Map { 'F' => 'No', 'T' => 'Yes' }

// 1、Map转换为数组
// ① 使用扩展运算符
const arr1 = [...map];
console.log(arr1); // [ [ 'F', 'No' ], [ 'T', 'Yes' ] ]
// ② 使用Array.from
const arr2 = Array.from(map);
console.log(arr2); // [ [ 'F', 'No' ], [ 'T', 'Yes' ] ]

// 2、数组转换为Map
const arr3 = [
    [{}, 'No'],
    [
        [1, 2], 'Yes'
    ]
];
const map1 = new Map(arr3);
console.log(map1); // Map { {} => 'No', [ 1, 2 ] => 'Yes' }

// 3、Map转换为对象，前提：Map中的元素都是‘字符串-值’的形式
function strMapToObj(strMap) {
    let obj = new Object();
    for (let [key, val] of strMap) {
        obj[key] = val
    }
    return obj;
}

const obj1 = strMapToObj(map);
console.log(obj1); // { F: 'No', T: 'Yes' }

// 4、对象转换为Map
function objToMap(obj) {
    let map = new Map();
    for (let key of Object.keys(obj)) {
        map.set(key, obj[key])
    }
    return map
}
const map2 = objToMap(obj1);
console.log(map2); // Map { 'F' => 'No', 'T' => 'Yes' }

// 5、Map转换为JSON
// 如果直接使用JSON.stringify转换会返回一个空的JSON：{}
console.log(JSON.stringify(map2));
// 需要考虑两种情况：
//  ① 如果Map中的元素都是‘字符串-值’的形式，转换为对象JSON
function strMapToJSON(strMap) {
    return JSON.stringify(strMapToObj(strMap));
}
const json1 = strMapToJSON(map2);
console.log(json1); // '{"F":"No","T":"Yes"}'
//  ② 如果Map中的元素的键名存在非字符串格式的，转换为数组JSON
function mapToArrayJSON(map) {
    return JSON.stringify([...map]);
}
const json2 = mapToArrayJSON(map1);
console.log(json2); // '[[{},"No"],[[1,2],"Yes"]]'

// 6、JSON转换为Map
// ① 对象JSON转换为Map
function objJSONToMap(objJson) {
    return objToMap(JSON.parse(objJson));
}
const map3 = objJSONToMap(json1);
console.log(map3); // Map { 'F' => 'No', 'T' => 'Yes' }

// ② 数组JSON转换为Map
function arrJSONToMap(arrJson) {
    return new Map(JSON.parse(arrJson));
}
const map4 = arrJSONToMap(json2);
console.log(map4); // Map { {} => 'No', [ 1, 2 ] => 'Yes' }
/**
 * 2017-09-14  Shi Mengyv
 */

var o = {
    name: 'hello',
    city: 'hangzhou',
    age: 20,
};
for (var key in o){
    console.log(key,o[key]);
    console.log(`key => ${key}, value => ${o[key]}`);
}

/**
 * 2017-09-14  Shi Mengyv
 */

var arr = [1, 2, 3, 4, 5];

// forEach()
arr.forEach(function(ele) {
console.log( ele += ele );
});

console.log( arr.forEach(function(ele) {
    return ele += ele;
}) );

// map()
console.log( arr.map(function(ele){
return  ele % 2; 
}) );

// filter()
console.log( arr.filter(function(ele){
    return ele > 3;
}) );
console.log( `arr.filter() => [ ${ arr.filter(function(ele){
    return ele > 3;
}) } ]` );

// reduce()
console.log( arr.reduce(function(prev, next){
    return prev + next;
}) );

//every()
console.log( arr.every( function(item){
    return item > 6;
}) );

//some()
console.log( arr.some(function(item){
    return item > 3;
}) );

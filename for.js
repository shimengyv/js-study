/**
 * 2017-09-14   Shi Mengyv
 */
var s = 0;
for ( var i = 0; i <= 10000; i++ ){
    if(i % 3 == 0) {
        s += i;
    }
}
console.log(s);

// 斐波那契数列
var a = [1, 1];
for ( var n = 2;  n <= 40; n++){
    a[n] = a[n - 1] + a[n - 2];
}
console.log(a);

var b =[1, 1];
for ( var i = 2; i <= 30;i++){
    b[i] = b[i - 1] + 2 * b[i - 2];
}
console.log(b);

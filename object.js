/**
 * 2017-09-14  Shi Mengyv
 */

var person = {
    hascar : true,
    age : 20,
    info : function () {
        console.log(this.hascar);
        console.log(this.age);
        console.log(this.info);
        console.log(`hascar => ${ this.hascar} age => ${ this.age} info => ${ this.info}`)
    }
};

person.info();

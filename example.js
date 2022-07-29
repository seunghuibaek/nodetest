"use strict";
class Person_ {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = "Mark";
    }
}
const p1_ = new Person_("Mark", 39);
console.log(p1_);
console.log(p1_.name);
//p1_.name = "bluewar";
console.log(p1_.name);
// console.log(p1.age);

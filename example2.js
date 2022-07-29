"use strict";
// static
class Person {
    static hello() {
        console.log("hi", Person.CITY);
    }
}
Person.CITY = "Seoul";
const p1 = new Person();
//p1.hello();
// p1.CITY;
//Person.hello();
//Person.CITY;

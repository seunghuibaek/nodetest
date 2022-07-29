"use strict";
let isDone = false;
isDone = true;
console.log(typeof isDone);
let isOk = true;
console.log(Symbol('foo'));
const returnAny = (message) => {
    console.log(message);
};
returnAny('리턴은 아무거나');
let looselyTyped = {};
const d = looselyTyped.a.b.c.d;

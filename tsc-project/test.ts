let isDone: boolean = false;
isDone = true;
console.log(typeof isDone);

let isOk: Boolean = true;
console.log(Symbol('foo'));

const returnAny = (message: any): any => {
    console.log(message);
}

returnAny('리턴은 아무거나');

let looselyTyped: any = {};
const d = looselyTyped.a.b.c.d;
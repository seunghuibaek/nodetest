//import random from '/getRandom'
import _ from 'lodash'
import checkType from './getType'
import {random} from './getRandom'

console.log(_.camelCase('the hello workd'));
console.log(checkType([1, 2, 3]));
console.log(random(), random());

// const ulEl = document.querySelector("ul");
// for (let i = 0; i < 10; i++) {
//     const li = document.createElement("li");
//     li.textContent = `list-${i + 1}`;
//     if ((i + 1) % 2 === 0) {
//         li.addEventListener("click", function () {
//             console.log(li.textContent);
//         });
//     }
    
//     ulEl.appendChild(li);
// }

// function scope() {
//     if (true) {
//         const a = 123;
//         console.log(a)
//     }
    
// }
// scope();

// const a = 7;
// const doubleTest = (b) => {
//     console.log(b * 2);
// }
// doubleTest(8);

// // 즉시 실행 함수
// (function () {
//     console.log(a * 2 );
// })();

// (function () {
//     console.log(a * 2 );
// }());

// 호이스팅
// const b = 6;

// double1();
// const double1 = function () {
//     console.log(b * 2);
// } 오류
// function double1() {
//     console.log(b * 2);
// }
// 타이머 함수
// const timer = setTimeout(() => {
//     console.log("ahhahah");
// }, 3000);

// const h1El = document.querySelector('h1');
// h1El.addEventListener("click", () => {
//     clearTimeout(timer);
//     clearInterval(timer1);
// });

// const timer1 = setInterval(() => {
//     console.log("1212121");
// }, 2000);

// 콜백
// const timeout = (cb) => {
//     setTimeout(() => {
//         console.log("100000");
//         cb();
//     }, 3000);
// }
// timeout(() => {
//     console.log("Done!!");
// });

// const bluewar = {
//     firstName: "sh",
//     lastName: "b",
//     getFullName: function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// console.log(bluewar.getFullName());

// const amy = {
//     firstName: "Amy",
//     lastName: "Clarke",
//     getFullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     }
// };
// console.log(amy.getFullName());

// const neo = {
//     firstName: "Neo",
//     lastName: "Smith",
//     getFullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     }
// };
// console.log(neo.getFullName());

// function User(first, last) {
//     this.firstName = first;
//     this.lastName = last;
    
// }
// User.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// }

// const bluewar = new User('Bluewar', 'SeungHui');
// console.log(bluewar.getFullName());
// const amy = new User('Amy', 'Clarke');
// console.log(amy);
// const neo = new User('Neo', 'Smith');
// console.log(neo);

// const timer = {
//     name: "test",
//     timeout: function() {
//         setTimeout(() => {
//             console.log(this.name);
//         }, 2000)
//     }
// }
// timer.timeout();

 
class User {
    // 내부 함수
    //constructor: function(first, last) {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const arm = new User('Army', 'Clark');
console.log(arm.getFullName());

class Vehicle {
    constructor(name, wheel) {
        this.name = name;
        this.wheel = wheel;
    }
}
const myVehicle = new Vehicle('운송수단', 2);
console.log(myVehicle);

class Bicycle extends Vehicle {
    constructor(name, wheel) {
        super(name, wheel);
    }
}
const myBicycle = new Bicycle('삼천리', 2);
const daughterBicycle = new Bicycle('세발', 3);
console.log(myBicycle);
console.log(daughterBicycle);

class Car extends Vehicle {
    constructor(name, wheel, license) {
        super(name, wheel);
        this.license = license;
    }
}
const myCar = new Car('벤츠', 4, true);
const daughtersCar = new Car('포르쉐', 4, false);

console.log(myCar);
console.log(daughtersCar);

const result = 'Hello World!'.indexOf('Worl');
console.log(result);

// 정규식(이메일에서 아이디 부분만 추출)
const str = 'bluewar@gamil.com';
console.log(str.match(/.+(?=@)/)[0]);

const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 100);
console.log(found);

array1.forEach(function(element, index, array) {
    console.log(element, index, array);
});

const numbers = [1, 2, 3, 4, 5];
const fruits = ['Apple', 'Banana', 'Cherry'];
const b = fruits.map((fruit, index) => ({
    id: index,
    name: fruit
}));
console.log(b);

// 배열 반환
// const c = numbers.map(number => {
//     return number < 3;
// });
const c = numbers.map(number => number < 3);
console.log(c);
// (5) [true, true, false, false, false]
// 배열 갯 수 만큼 조건의 값을 true/false로 출력
const d = numbers.filter(number => {
    return number < 3;
});

console.log(d);
// 조건에 맞는 값만 배열로 생성
// (2) [1, 2]

// 정규표현식 대문자 시작하는 문자 
const e = fruits.find(fruit => {
    return /^B/.test(fruit);
});
console.log(e);

// 몇번째 번호인지 찾는거
const f = fruits.findIndex(fruit => /^C/.test(fruit));
// const f = fruits.findIndex(fruit => {
//     return /^C/.test(fruit);
// });
console.log(f);

// 포함 여부 true / false로 출력
const g = numbers.includes(3);
console.log(g);

const h = fruits.includes('bluewar');
console.log(h);

// 배열 추가. 맨 끝에 삽입
numbers.push(6);
console.log(numbers);
// 배열 추가. 맨 앞에 삽입
numbers.unshift(2);
console.log(numbers);

// 배열을 거꾸로 출력
numbers.reverse();
fruits.reverse();
console.log(numbers);
console.log(fruits);

// 배열 데이터 삭제(원 데이터 수정됨). 0 1 2 - 2번째 데이터를 한개 지운다
numbers.splice(2, 1);
console.log(numbers);

// 2번째 자리에서 지우지 않고 999를 추가해라
numbers.splice(2, 0, 999);
console.log(numbers);

fruits.splice(2, 0, 'Orange');
console.log(fruits);

// 객체 복사(합쳐서 출력). target에 source가 포함됨, 여러개를 추가할 수 잇음
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const source1 = { c: 4, d: 5 };

const returnedTarget = Object.assign(target, source, source1);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

const a1 = Object.assign({}, target, source, source1)
console.log(a1);

const user =  {
    name: 'Bluewar',
    age: 85,
    email: 'bluewar@lycos.oc.kr'
}

// 키 값으로 배열로 만들어서 반환
const keys = Object.keys(user);
console.log(keys);
console.log(user['email']);
// 배열로 만들어서 반환 해줌. 값들만 가지고 있음. 그래서 숫자로 찾음
const values = keys.map(key => user[key]);
console.log(values[0]);

// 구조 분해 할당
const {name, age, email, address = 'Korea'} = user;
// 재할당
const tt = name;

console.log(`사용자의 이름은 ${tt}입니다.`);
console.log(`${name}의 나이는 ${age}세입니다.`);
console.log(`${name}의 이메일 주소는 ${email} 입니다.`);
console.log(address);

// 배열인 경우 대괄호 사용
//const [a2, b1, c1, d1] = fruits;
//console.log(a2, b1, c1, d1);
const [, b1] = fruits;
console.log(b1);

// 전개 연산자 ... 배열 데이터를 쉼표로 구분하는 데이터로 출력
console.log(...fruits);

function toObject(a, b, c) {
    return {
        a: a,
        b: b,
        c: c
    }
}
console.log(toObject(...fruits));
// 전개 연산자로 할 경우 ... 으로 출력 할 수 있으나 아니라면 다 추가해줘야 한다
console.log(toObject(fruits[0], fruits[1], fruits[2]));
// 함수에서 사용시 ...은 나머지 데이터 모두로 해석
const toObject1 = (a, b, ...c) => ({ a, b, c })

console.log(toObject(...fruits));

// 깊은 복사. 새로운 주소로 할당되면서 복사
const copyUser = _.cloneDeep(user);
console.log(copyUser === user);

user.age = 22;
console.log('user', user);
console.log('copyUser', copyUser);
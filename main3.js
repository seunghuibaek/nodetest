// JSON

import myData from './myData.json'

console.log(myData)

const user = {
    name: 'HEROPY',
    age: 85,
    emails: [
        'bluewar111@nate.com',
        'bluewar111@naver.com'
    ]
}
console.log('user', user)

const str = JSON.stringify(user)    // 문자형으로
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str)         // json 형태로
console.log('obj', obj)
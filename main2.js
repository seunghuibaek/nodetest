import _ from 'lodash'      // _ 는 default 함수를 가져온다. 임의로 이름을 지정

const users = [
    { userId: '1', name: 'HEROPY' },
    { userId: '2', name: 'Neo' },
    { userId: '3', name: 'Amy' },
    { userId: '4', name: 'Evan' },
    { userId: '5', name: 'Lewis' }
]

const foundUser = _.find(users, { name: 'Amy'});
const foundUserIndex = _.findIndex(users, { name: 'Amy'})
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, { name: 'HEROPY'})
console.log(users)
import _ from 'lodash'      // _ 는 default 함수를 가져온다. 임의로 이름을 지정

const usersA = [
    { userId: '1', name: 'HEROPY' },
    { userId: '2', name: 'Neo' }
]

const usersB = [
    { userId: '1', name: 'HEROPY' },
    { userId: '3', name: 'Amy' }
]

const usersC = usersA.concat(usersB)
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId'))

const usersD = _.uniqBy(usersA, usersB, 'userid')
console.log('unionBy', usersD)
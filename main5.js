// 정규식
let str = `
010-1234-5678
thebluewar111@nate.com
https://www.omdbapi.com/?i=tt3896198&apikey=ae748ae5&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
hxyp
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`
// 생성자 형식의 함수
// const regexp = new RegExp('the', 'gi')
// console.log(str.match(regexp))
// const regexp = /nate/gi
// console.log(str.match(regexp))
// const regexp = /fox/gi
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)

// const regexp = /the/gi
// console.log(str.match(regexp))
// console.log(str.match(/\.$/gim))

// console.log(str.match(/d$/gm))
// console.log(str.match(/^t/gim))
// console.log(str.match(/h..p/g))  // .. <-- 어떠한 글자가 와도 일치
// console.log(str.match(/fox|dog/g))  // | <-- 또는
// console.log(str.match(/https?/g))   // ? <-- 바로앞 문자가 있을 수도 없을 수도 있다
// console.log(str.match(/d{2}/))  // {2} 연속으로 반복 되는
// console.log(str.match(/d{2,}/))  // {2,} 2개 이상 연속으로 반복 되는
// console.log(str.match(/\b\w{2,3}\b/g))  // {2,3} 2개 이상 이고 3개 이하의 단어

// console.log(str.match(/[fox]/g))
// console.log(str.match(/[0-9]{1,}/g)) // 숫자 0부터 9까지 중 한자리 이상
// console.log(str.match(/[가-힣]{1,}/g))

// console.log(str.match(/\w/g))
// console.log(str.match(/\bf\w{1,}\b/g))
// console.log(str.match(/\d{1,}/g))

// const h = `  the hello  world       !

// `
// console.log(h.replace(/\s/g, ''))       // 공백, 엔터 제거

console.log(str.match(/.{1,}(?=\@)/g))      // 이메일 주소에서 아이디 부분만
console.log(str.match(/(?<=\@).{1,}/g))     // 이메일 도메인 부분만
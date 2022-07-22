// 변수 타입
// default 인 경우 이름을 지워도 된다(getType)
// export default function getType(data) {
//     return Object.prototype.toString.call(data).slice(8, -1);
// }
export default function (data) {
    return Object.prototype.toString.call(data).slice(8, -1);
}
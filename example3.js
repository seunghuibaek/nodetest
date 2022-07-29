"use strict";
class ClassName {
    constructor() {
    }
    static getInstance() {
        // ClassName 으로부터 만든 object가 있으면 그걸 리턴
        // 없으면, 만들어서 리턴
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
    }
}
ClassName.instance = null;
const a = ClassName.getInstance();
const b = ClassName.getInstance();
console.log(a === b);

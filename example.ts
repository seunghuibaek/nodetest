class Person_ {
    public readonly name: string = "Mark";
    public constructor(public _name: string, public age: number) {}

    // get name() {
    //     console.log("get");
    //     return this._name;      // get인 경우 return이 있어야 한다
    // }

    // set name(n: string) {
    //     this._name = n;
    // }
}

const p1_: Person_ = new Person_("Mark", 39);
console.log(p1_);

console.log(p1_.name);
//p1_.name = "bluewar";
console.log(p1_.name);
// console.log(p1.age);
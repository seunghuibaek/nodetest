class Students {
    // index signatures
    //mark: string = 'male';

    //[index: string]: string;
    [index: string]: "male" | "femaile";
}

const a1 = new Students();
a1.mark = "male";
a1.jade = "male";

console.log(a);

const b1 = new Students();
b1.chloe = "femaile";
b1.alex = "male";
b1.anna = "femaile";

console.log(b);


function factorial(term){
    
    let num = 1
for(let i = 1; i<=term; i++){
    num *= i
    
    
    console.log(num)

}}


function fibonochi(term){

    let firstterm = 0
    let secondterm = 1

for (let i = 1; i<=term; i++){
    let nextterm = firstterm + secondterm
    firstterm = secondterm
    secondterm = nextterm

    console.log(nextterm)
}

}


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let SkibidiTheFirst = new Node(2);
let SkibidiTheSecond = new Node(1);

SkibidiTheFirst.next = SkibidiTheSecond;
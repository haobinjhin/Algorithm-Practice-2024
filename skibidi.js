

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

const parkspace = 5;
const spaceone = "CC..C";
const spacetwo = ".CC..";



function parkingspace(space, firstspace, secondspace){
    let emptyspace = 0;
    for(let i = 0; i <=space; i++){
        if (firstspace[i] === '.' && secondspace[i] === '.'){
                emptyspace ++
            }
        }
        console.log(emptyspace)
    }
    

function binarytodecimal(binary){

    let digit = 0
    let firstnum = 0

    while(binary > 0){
        binary = binary/10
        digit++ 
    }

    for(let i = 0; i <= digit; i++){
        let digitnum = binary[i];
        let position = digit;

        binaryplace = 2**position;

        let secondnum = digitnum*binaryplace;
        firstnum += secondnum

        position -= 1
    }
    console.log(firstnum)
}

binarytodecimal(1010)

/*
function binarydecimal(binary){

    let digit = 0
    let number1 = 0


    while (binary >0){
    binary = binary/10
    digit = digit + 1
    }

    for(i = 0; i<=digit; i++){
    whatdigit = binary[i]


    let number2 = whatdigit*(2^digit)

    num = number2 + number1
    number1 = num

    digit = digit - 1  
    }




}


*/


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
    let digit = 0;
    let pseudobinary = binary
        
    while(pseudobinary  > 1){
        pseudobinary  = pseudobinary /10
        digit++
    }
    
        let num1 = 0;
        let numfinal = 0;
        let standindigit = digit
    
    for(i = 0; i<standindigit; i++){

        binary = String(binary)
        let bidigit = binary[i]; 
    
        bidigit = Number(bidigit)
    
        let binaryplace = 2**(digit-1)

        let num2 = binaryplace*bidigit

        numfinal = num1 + num2

     

        num1 = numfinal
        digit = digit - 1
       
    }
    console.log(numfinal)
    
}
    




function binarytodec(binary){
    let decimal = 0;

    for (let i = 0; i < binary.length; i++){
        if (binary[binary.length - 1 -i] === "1"){
            decimal = decimal + Math.pow(2,i);
        }
    }

    console.log(decimal)
}



/*Copy the idea not the code */
function bi2dec(binary){
    const value =[128, 64, 32, 16, 8, 4, 2, 1];
    let count = 0;

    for (let i = 0; i <= 8; i++){
        if(binary[i] === '1'){
            count += value[i]
        }
    }
    
}


function decimaltobinary(decimal){
    let count = decimal
    let binary = ""

    for(i = 0; i<count; i++){
        if (decimal % 2 === 0){
            binary = binary.concat("0")
            count = count/2
        }
        else if ( decimal % 2 === 1){
            binary = binary.concat("1")
            decimal = decimal - 1
            count = count/2
        }

    }

    console.log(binary)


}



decimaltobinary(10)

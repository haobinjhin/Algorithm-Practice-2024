

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
    
binarytodecimal(111111)





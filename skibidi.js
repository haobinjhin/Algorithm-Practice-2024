

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
    


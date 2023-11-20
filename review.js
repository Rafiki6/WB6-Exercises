

x = 123
console.log(x);

A = 65 //64+1
B = 97 //64+1+32

console.log(A,a)

camelCase = "CORRECT"
TitleCase = "GOOD FOR CLASS(Object Templates) Later"
snake_case_is_longer ="USED IN PYTHON AND PHP AND PERL"
const TAX_RATE = 0.08 //TRUE CONSTANTS


a = new Array()
a2 = []

o = new Object() //LIKE A DICTIONARY OF KEY-VALUE(WORD-DEFINITION)PAIRS
o2 = {}

// ONE LINE COMMENT IN JS *NOT* IN CSS
/* ***** A BLOCK COMMENT ALSO WORKSIN CSS middle bit
**** */
html = `<!--HTML COMMENTS ARE COMPLETELY DIFFERENT -->`

x = 123 // = is the ASSIGNMENT OPERATOR
y = 456
r = x == y //==is THE COMPARISON OPERATOR 

function myFunc(Pam1 ,par2){
    return par1 + par2;
}

argument1 = 123;
argument2 = 456;
console.log(myFunc(argument1,argument2)); //CALL OR INVOKE

let aa = 123 , bb = 456;
console.log(aa , bb);

console.log(5 + 3 * 4 -2) //PMDAS SAYS 15 *NOT* 16

//SCOPE
aaa = "global"; //NO LET R CONST  OR VAR AND NOT IN BLOCK
function privateFunction(){ //START BLOCK
    let aaa = "Internal private not global"; //LOCAL/BLOCK SCOPE
}//END BLOCK
privateFunction()
console.log(aaa)//PRINTS "GROBAL"

let d = new Date(); //TODAY
console.log(d.getMonth());//MONTH 0-11
console.log(d.getTime()) //MS SINCE UNIX EPOCH 1/1/1970 00:00:00

list = [11,22,33]
list.push(44) //APPENDED to end of array
console.log(list) //[11,22,33,44]

list.unshift(0) //INSERT AT BEGINNING OF ARRAY
console.log(list) //[0,11,22,33,44]

//% GET THE REMAINDER OF DIVISION AKA MODILUS OPERATOR FROM MODULO DIVISION
for (let i = 0; i < 10; i++){
    let reminder = i % 2;
    // console.log(reminder);
    if(reminder == 0){
        console.log(`---${i}--`)

        }
        else{
            console.log(`===${i}===`)
        }
    }
console.log(`"`) //BACKTICK `REVERSE QUOTE OR GRAVE ACCENT
console.log("\"") //BACKSLASH IS THE ESCAPE CHARACTER  "LITARAL" \N \T \\
console.log('"')

option ="" //FALSEY
option2 = "Kevin" //TRUTHY

//USE || "OR" OPERATOR TO SUBSTITUTE
console.log(option || "BLANK");
console.log(option2 || "BLANK")

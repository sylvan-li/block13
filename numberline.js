//Is Truthy
//ask user for input
//initialize user input into variables 
//

let value="I am a string";

if(value="I am a string") {
  console.log(true);
} else if (value=false){
  console.log("the boolean value false is falsy"); 
} else if (value=null);{
  console.log("the null value is falsy");
} if (value=undefined);{
  console.log("undefined is falsy");
} if (value=0);{
  console.log("The number 0 is falsy (the only falsy number)");
} if (value ="");{
  console.log("the empty string is falsy (the only falsy string)");
}


//Greater than 5
//ask user for input 
//initialize user input into variables 
//write code that dictate that a number should be greater than or equal to five to successfully have a true

let num1=10;
let num2=11;

if (num1,num2>=5){
    console.log("true");}
else{console.log("false");}
     

//Pair and Compare
//ask user for input
//initialize user input into variables
//use || operator to ensure at least one pair is truthy 

let param1A="cat";
let param1B="cat";
let param2A=6;
let param2B="6"

if(param2A===param2B || param1A===param1B){
    console.log("true");
} else{
    console.log("false");
}

//Number Line
//ask user for input for both variables
//initialize these variables 
//initialize the sum of two inputs as a variable 
//write parameters that meet expected print
// write expected printout + user inputed sum

let num1=-5;
let num2=0;
let sum=(num1+num2);

if(num1+num2<0){
    console.log(sum+" is a negative number");
}else{
    if(num1+num2>100){
        console.log(sum + " is greater than 100");
    }else{
        if(num1+num2>0){
            console.log(sum + " is greater than 0");
        }
    }{if(num1+num2===0){console.log(sum + " is equal to 0");}}
}


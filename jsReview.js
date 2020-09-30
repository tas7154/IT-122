// Variables - Variables ar used to stor information. JS is not strict type.

    // Variable types
    var a = 10;
    var name = "Tom";
    var middleName = 'D';
    var isHot = false;

    // Arrays
    var arrayNumbers = [1,2,3,4,5];
    var arrayString = ["Frank","John"];

    // Objects
    var obj1 = {
        name: "Philip",
        age: 65
    }

// Functions - Functions are blocks of reusable code that can be called by name

function myFunction(){
    console.log("Hey");
}
myFunction();

// passing parameters to a function
function myFunction2(greeting){
    console.log(greeting);
}
myFunction2("Hey yourself");

// Flow Control (Conditionals)
var a = 1;

// Basic if else
if(true){
    doThis;
} else {
    doThat;
}

// If else with with multiple conditions
if(a == 1){
    doThis;
} else if (a == 2){
    doThat;
} else {
    doTheOtherThing;
}

// Switch condition
var zipCode;

switch(zipCode){
    case 98101:
        doStuff1;
        break;
    case 98109:
        doStuff2;
        break;
    default:
        doContigient;
        break;
}

// Flow Control (Loops)

// For Loops - Finite counting when you know how much you want to count
for(var i = 0;i < 10; i++){
    doStuff;
}

// While Loops - Infinite counting when you don't know how much you want to count
var b = true;
while(b){
    doStuff;
    if(someCondidion){
        b = false;
    }
}


// Data Structures
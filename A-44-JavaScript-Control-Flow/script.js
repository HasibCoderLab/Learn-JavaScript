// ========================
//      ***** Practice Problem 1 *****
// ======================== 

const checkLength = (name) =>{
    if(name.length > 6){
        return "Accept your idea" ;
    }
    else{
        return"Please change your idea" ;
    }
}
console.log(checkLength("JavaScript")) ;
// Output:Accept your idea
console.log(checkLength("HTML")) ;
// Output: Please change your idea




// ---------------------- Or ---------------------------------

const seeLength = (name) => name.length > 5 ? "Accept your idea" : "Please change our idea"

console.log(checkLength("JavaScript")) ;
// Output:Accept your idea
console.log(checkLength("HTML")) ;
// Output: Please change your idea


// -----------------------------------------------------------------

// ========================
//      ***** Practice Problem 2 *****
// ======================== 

const whatLove = (love) =>{
    if(!love){
        return "Please enter a valid choice" ;
    }
 else if(love === "Rose"){
       return "He/She  loves flowers.";
    }

    else if (love==="Coding"){
        return "He/She loves technology.";
    }

    else if(love === "Mother" || love === "Father"){
        return "He/She loves parents.";
    }
    else{
       return "He/She is not human.";
    }

}

console.log(whatLove("Rose")) ;
// Output: He/She  loves flowers.

console.log(whatLove("")) ;
// Output: Please enter a valid choice 

console.log(whatLove("Coding")) ;
// Output: He/She loves technology.


// ----------------------------------------------------------------


// ========================
//      ***** Practice Problem 3 *****
// ======================== 


const checkNumber = (num) => num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"
console.log(checkNumber(10));
// Output: Positive
console.log(checkNumber(-10));
// Output: Negative



// -------------------- Or   -------------------------------

const checkNum  = (num) =>{
if(num > 0){
    return "Positive" ;
}
else if(num < 0){
    return "Negative" ;
}
else{
    return "Zero" ;
}
}

console.log(checkNum(4));
// Output: Positive
console.log(checkNum(-1)) ;
// Output: Negative


// -----------------------------------------------------------------



// ========================
//      ***** Practice Problem 4 *****
// ======================== 

const studentNumber = (input) => input >= 40 ? "Pass" : "Fail" ;
console.log(studentNumber(50)) ; 
// Output: Pass

// -------------------- Or   -------------------------------

const studentNum = (input) =>{
if(input >= 40){
    return "Pass" ; 
}
else{
    return "Fail" ;
}
}

console.log(studentNum(30)) ;
// Output: Fail
console.log(studentNum(50)) ;
// Output: Pass
console.log(studentNum(39.99));
// Output: Fail


// -----------------------------------------------------------------


// ========================
//      ***** Practice Problem 5 *****
// ======================== 

const biggestNumber =  (a,b) =>{
    if(a > b){
        return a ;
    }
      else if (a < b){
        return b ;
      }
    else{
        return "Both are equal";
    }
}

console.log(biggestNumber(10,20));
// Output: 20

console.log(biggestNumber(30,10));
// Output: 30

console.log(biggestNumber(0.5,0));
// Output: 0.5

console.log(biggestNumber(15,15));
// Output :Both are equal


// -----------------------------------------------------------------



// ========================
//      ***** Practice Problem 6 *****
// ======================== 

const checkOdd = (num) => num % 2 === 0 ? "Even" :"Odd" ;
console.log(checkOdd(-20));
// Output: Odd
console.log(checkOdd(10));
// Output: Even


// -------------------- Or   -------------------------------


const checkEven = (num) =>{
    if(num % 2 ===0){
        return "Even" ;
    }
    else{
        return "Odd" ;
    }
}

console.log(checkEven(21));
// Output: Odd
console.log(checkEven(10));
// Output: Even


// -----------------------------------------------------------------


// ========================
//      ***** Practice Problem 7 *****
// ======================== 

const chackAdult = (age) => age >= 18 ? "You are adult" : "You are minor"

console.log(chackAdult(17))
//  Output: You are a minor."
console.log(chackAdult(-19))
//  Output: You are a minor."
console.log(chackAdult(45));

//  Output: You are a adult."
// -------------------- Or   -------------------------------



const checkAge = (age) =>{
    if(age >= 18){
        return "You are adult."
    }
    else{
        return "You are a minor."
    }
}

console.log(checkAge(17.9))
//  Output: You are a minor."
console.log(checkAge(-19))
//  Output: You are a minor."
console.log(checkAge(45));

//  Output: You are a adult."





//  Java Script if - else  And  Conditional (Ternary) Operator


//  Example - of ==  if/else 👇👇👇👇  ===========



// ================ Example - 1  ==============

function chakeNumber (num) {
if(num > 0)
    return "positive"


else if(num < 0 ){
    return "Negative"
}

else {
    return "Zero"
}
}
console.log(chakeNumber(10));

// ================ Example - 2  ==============

function leapYear  (year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a Leap Year......`;
    } else {
        return `${year} is not a Leap Year......`;
    }
};

console.log(leapYear(2024)); // Output: '2024 is a Leap Year......'
console.log(leapYear(2025)); // Output: '2025 is not a Leap Year......'



function isLeapYear  (year)  {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a Leap Year......`;
    } else {
        return `${year} is not a Leap Year......`;
    }
};

console.log(isLeapYear(2024)); // Output: '2024 is a Leap Year......'
console.log(isLeapYear(2025)); // Output: '2025 is not a Leap Year......'

//   ASK - Traner 

const leepYear1 =  (year) =>{
    if((year % 4 === 0 && year % 100 !==0 )||
year % 400 === 0
){
    return " Leep Year...... "
}else {
    return " Is Not A Leep Year"
}
}

console.log( leepYear1(2024) );
console.log( leepYear1(1994) );


// ================ Example - 3  ==============

 function  multupul(a , b){
if (a*b >= 100){
    return "Product is 100 more than"
}else{
    return "Product is Less......... than 100"
}
 } 

 console.log(multupul(10,20));
 console.log(multupul(4,2));
 console.log(multupul(10,10));
 console.log(multupul(10 ,5));

// ================ Example - 4  ==============

// 👉 0-12 = " Child"  - 12-19 = "Theen"  -  20👆 = "Adul" 

function DeterMineAgeGroup  (age) {
    if(age >= 0  && age <=12 ){
 return "Child"
    }

    else if (age >= 12 && age <= 19){
        return "Teen"
    }

    else if (age >= 20 ){
        return "Adult"
    }

    else {
        return "Invaild Age"
    }

}
console.log(DeterMineAgeGroup(10));
console.log(DeterMineAgeGroup(17));
console.log(DeterMineAgeGroup(22));


// ================ Example - 5  =============

const startWithWord =  (str,word) =>{
if(str.startsWith(word)){
    return `starts With ${word}`
}
else{
        return `Does not with ${word}`
    }
    }
    
    console.log(startWithWord("Hello World" , "Hello"))  // Output:  "starts With Hello"
    console.log(startWithWord("Python is Great" , "Java"))  // Output:  " Does not with Java" 
    console.log(startWithWord("Java script is Fan" , "Java"))  // Output:  "starts With Java"
     
    // ================ Example - 6  ==============

    function findSmaller(a, b) {
        if (a < b) {
            return a;
        } else if (b < a ) {
            return b;
        } else {
            return"Both are equal";
        }
    }
    
    console.log(findSmaller(10, 20)); // Output: 10
    console.log(findSmaller(20, 20)); // Output:"Both are equal"
    console.log(findSmaller(100, 400)); // Output: 100
    
    // ================ Example - 7  ==============

function  divisibleByThreeAndSeven(num){
    if (num % 3 === 0 && num % 7 === 0) {
        return `${num} -> is a divisible by  both  3 and 7`
    }
     else {
        return   `${num} -> is not divisible by  both  3 and 7`
     }
}

 console.log(divisibleByThreeAndSeven(21)); // Output: "21 is divisible by both 3 and 7" 
 console.log(divisibleByThreeAndSeven(10)); // Output: "10 is not divisible by both"

    // ================ Example - 8  ==============

   function findMax(a,b,c){
     if (a >= b &&  a >= c) {
         return `${a} is the maximum number`
     }

   else if ( b >= a && b >= c ){
           return `${b} is the maximum number`
   }
   else {
          return `${c} is the maximum number`
   }
   }

   console.log(findMax(10,5,70))  // Output: "70 is the maximum number"
   console.log(findMax(10,47,5))  // Output: "47 is the maximum number"
   console.log(findMax(478,15,27))  // Output: "478 is the maximum number"
    
    // ================ Example - 9  ==============

    function getSeason(month) {
        if (month === "December" || month ===  "January" ||  month ===  "February") {
            return  "Winter"
        }

        else if(month === "March" || month ===   "April" || month ===  "May" ){
            return  "Spring"
        }
        else if(month === "June" || month ===   "July " || month ===  "August" ){
            return  "Summer"
        }
        else{
            return  "Fail"
        }
    }

    console.log(getSeason("June"));  // Output: "Summer"
    console.log(getSeason("March"));  // Output: "Spring"
    console.log(getSeason("February"));  // Output: "Winter"
    

    // ================ Example - 10  ==============
    
    function checkEligility(age){
        if (age >= 18) {
            return "Eligility to vote"
        }

        else{
              return "Not eligility to vote"
        }
    }
    console.log(checkEligility(18));  // Output: "Eligility to vote"
    console.log(checkEligility(14)); // Output: "Not eligility to vote"
    
    // ================ Example - 11  ==============
    function chechRange(num) {
        if(num >= 0 &&  num <= 100){
      return  " In range"
        }

        else{
            return "Out of  range"
        }
    }
    console.log(chechRange(100)); // Output: "In range"
    console.log(chechRange(400)); // Output: "Out of  range"
    
    // ================ Example - 12  ==============

function isEvenOdd(num) {
    if (num % 2 ===0) {
        return `${num} Is Even Number `
    } else {
         return `${num} Is Odd Number `
    }
}

console.log(isEvenOdd(10));  // Output: "10 Is Even Number "
console.log(isEvenOdd(15));  // Output: "15 Is Even Number" 


    // ================ Example - 13  ==============
    // ================ Example - 14  ==============
    // ================ Example - 15  ==============
    // ================ Example - 16  ==============
    
    
    
    
    //  Examples - of ==  Conditional (Ternary) Operator 👇👇👇👇  ===========
   

    // ================ Example - 1  ==============
    function checkNumber(num){
        return num > 0 ? "Positive" : num < 0 ? "Nagetive" : "Zero" 
    }
 console.log(checkNumber(10));  // Output: "Positive"
 console.log(checkNumber(-7));  // Output: "Nagetive"
 console.log(checkNumber());    // Output: "Zero"
 
    // ================ Example - 2  ==============
    const calculateDiscount = (price) => {
        return  price > 1000 
    ?`10 % Discount${price*0.9}` 
    : `5 % Discount${price*0.95}`;
 }
 
 console.log(calculateDiscount(1200))   // Output: "10% Discount: 1080"
 console.log(calculateDiscount(200))     // Output: "5% Discount: 190"
 
  // ================ Example - 3  ==============
  
  // ================ Example - 1  ==============
  // ================ Example - 1  ==============


 /**
  * =============================
  * ES6 Features:
  * =============================
  * This section demonstrates:
  * - Arrow functions
  * - Template literals
  * - Destructuring
  * - etc.
  */

 // =========================================
// Section: ES6 Features Implementation
// =========================================

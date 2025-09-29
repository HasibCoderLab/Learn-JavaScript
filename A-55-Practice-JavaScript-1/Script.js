// Task Of Java Script

// const userName = prompt("Enter Your Name:");
// console.log(`Wellcome, ${userName}!`);


// const number = parseInt(prompt("Tyep Any Number:"));
// if (number % 2 === 0) {
//     console.log(`${number}10`);
// } else {
//     console.log(`${number} 11`);
// }





// Task  2
 

let sum = 0; // Variable for aggregationsssss

for (let i = 1; i <= 100; i++) { // Loop from 1 to 100
    sum += i; // Adding each number
}

console.log(`The sum of the numbers from 1 to 100: ${sum}`); 


let fib = [0, 1]; // ফিবোনাচ্চি সিরিজের প্রথম দুইটি সংখ্যা

for (let i = 2; i < 10; i++) { // ১০ পর্যন্ত সংখ্যা হিসাব করা
    fib[i] = fib[i - 1] + fib[i - 2]; // পরবর্তী সংখ্যা বের করা
}

console.log(`১০ পর্যন্ত ফিবোনাচ্চি সিরিজ: ${fib.join(", ")}`); // ফলাফল প্রিন্ট করা

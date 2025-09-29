console.log("Hello World");
let countrys = new Map([
    ['Bn' , 'Bangladesh'],
    ['Np' , 'Napal'],
    ['Ca' , 'Canada']


])
for( let nik  of countrys)
console.log(`${nik}`);


let countrys1 = new Map([
    ['Bn' , 'Bangladesh'],
    ['Np' , 'Napal'],
    ['Ca' , 'Canada']


])
for( let [key , value]  of countrys1)
console.log(`${key} : ${value}`);


const products = [
    {name:'shirt', price:20},
    {name:'shoes', price:30},
    {name:'pant', price:40},

]

const output = products.map(sum => sum.price *10)
console.log(output);


const numbers = [5,3,4,2]
const result  = numbers.reduce( (total, number) => 
     total * number
,1)
console.log(result);



// const sum = () => {
//     let count = 2; 
//     return () => {
//         count *= count; 
//         console.log(count); 
//     };
// };

// const result1 = sum(); 
// result1(); 
// result1();


const sum1 = (function () {
    let multiply = 4 * 2; 
    return function () {
        console.log(multiply);
        multiply  =  multiply * 2; 
    };
})();

sum1(); 
sum1();
sum1();

sum1();


 

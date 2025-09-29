// ===>>>> Reduce =====>>>> Reduce  ===>>>> Reduce =====>>>>>>>>>
const numbers = [1,1,1,11,1,1,1];

const result = numbers.reduce( (total , number )=>{
  return   total + number 
},0)

console.log(result);
//  output 17






// 2nd Example ================== >> 2nd Example    <<<<<<<<<<====
const shopItem = [
  { name :"Book" , Price:410 },
  { name :"Pen" , Price:10 },
  { name :"A4 Peper" , Price:500 },
  { name :"NotePad" , Price:100 }

];
const TotalPrice = shopItem.reduce( (sum, item) =>{
  return  sum + item.Price  
},0)
console.log(TotalPrice);
//  output 1020



// 3rd Example ================== >> 3rd Example ========= <<<<<<<<<<====
const fruits = ["apple" , "banana" , "apple" , "orange", "apple", "banana" , "apple" ];

const fruitsCount  = fruits.reduce( (count , fruit) =>{
  count[fruit]  = (count[fruit]||0) +1 ;
 return count  
},{} )

 console.log(fruitsCount);
 // Output: { apple: 4, banana: 2, orange: 1 }

// 1st Example ================== >> 1st  Example ========= <<<<<<<<<<====

(function (name) {
    console.log("Hello, " + name);
})("Code Fusion");


// 2nd Example ================== >> 2nd Example ========= <<<<<<<<<<====


( function (name,age){
  console.log(`Name ${name} Age ${age}`);
  
}) ("Hasib" ,17)




// 3rd Example ================== >> 3rd Example ========= <<<<<<<<<<====

for (var i = 0; i < 3; i++) {
  (function (index) {
      setTimeout(function () {
          console.log(index); // Outputs: 0, 1, 2
      }, 1000);
  })(i);
}

// কী হচ্ছে এখানে?

// IIFE কী করে?
//1. প্রতিবার লুপ চলার সময় IIFE আলাদা একটি scope তৈরি করে এবং i এর বর্তমান মানকে index প্যারামিটারের মাধ্যমে ধরে রাখে।


// 2.i পাস করা হচ্ছে:
// লুপে চলমান i মান IIFE-এর প্যারামিটার index-এ পাস করা হচ্ছে। প্রতিবার লুপ চলার সময় IIFE আলাদা scope তৈরি করে এবং index-এ i এর আলাদা কপি রাখে।


// 3.setTimeout এর ভিতরে কাজ:
// এখন setTimeout যখন callback function চালায়, তখন সে index-এর মান ব্যবহার করে, যা IIFE-এর স্কোপে স্টোর করা হয়েছে। এর ফলে প্রতিবার সঠিক মান প্রিন্ট হয়।




// 4th Example ================== >> 4th Example ========= <<<<<<<<<<====


(function (name ,age,job, workPlace) {
  console.log(`Name ${name} Age ${age} Job ${job} WorkPlace ${workPlace}`);
  
})
("Hasib",17, "Dev", "online")


// 5th Example ================== >> 5th Example ========= <<<<<<<<<<====


const globalVar = "I am a Global Var";
(function (){
  const localVar = "I am a Local var ";
})()
console.log(globalVar);


(function (name) {
console.log(`Helllo ${name}`);

})('Code Fusion')


// 6th Example ================== >> 6th Example ========= <<<<<<<<<<====

const counter = (function () {
  let count = 0;
  return{
    increment:function(){
      count++
      console.log(count);
      
    },
    decrement:function(){
      count--
      console.log(count);
      
  },
  getCount:function(){
    return count ;
  }
}
})()
counter.increment()
counter.increment()
counter.increment()
counter.decrement()


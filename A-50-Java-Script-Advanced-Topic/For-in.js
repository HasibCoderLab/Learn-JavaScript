
// 1st Example ================== >> 1st Example    <<<<<<<<<<====
const Ytname = "Code Fusion";

for (let index in Ytname) {
  console.log(Ytname[index]);
}


// 2nd Example ================== >> 2nd Example    <<<<<<<<<<====
const myName = "Hasib Hasan";
for(let index in myName ){
    console.log(myName[index]);
    
}

// 3rd Example ================== >> 3rd Example    <<<<<<<<<<====
const fruits1 = ['apple', 'banana', 'cherry'];
for (let index in fruits1) {
  console.log(index + ': ' + fruits1[index]);
}

// 4th Example ================== >> 4th Example    <<<<<<<<<<====


const person1 = {
  name: 'Hasib',
  age: 17,
  country: 'Bangladesh'
};

for (let key in person1) {
  console.log(key + ': ' + person1[key]);
}

// 5th Example ================== >> 5th Example    <<<<<<<<<<====
const person2 = {
  name: 'Hasib',
  age: 17,
  city: 'Rajshahi'
};

for (let key in person2) {
  console.log(key + ': ' + person2[key]);
}

// 6th Example ================== >> 6th Example    <<<<<<<<<<====

const colors = ['red', 'green', 'blue'];

for (let index in colors) {
  console.log(index + ': ' + colors[index]);
}


// বিস্তারিত ব্যাখ্যা:

//1. index প্রথমে 0 হয় এবং colors[0] হয় 'red'।
//2. পরবর্তী লুপে, index হয় 1 এবং colors[1] হয় 'green'।
//3. তৃতীয় লুপে, index হয় 2 এবং colors[2] হয় 'blue'।


// // 7th Example ================== >> 7th Example    <<<<<<<<<<====
const student = {
  name: 'John',
  marks: {
    math: 90,
    english: 85,
    science: 88
  }
};

for (let key in student.marks) {
  console.log(key + ': ' + student.marks[key]);
}

// বিস্তারিত ব্যাখ্যা: ==>

//  student.marks অবজেক্টের প্রপার্টি math, english, এবং science।
//  for...in লুপ একে একে প্রপার্টি ধরে এবং তাদের মান প্রিন্ট করে।






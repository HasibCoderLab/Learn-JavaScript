
// 1st Example ================== >> 1st  Example ========= <<<<<<<<<<====
const name = "Code Fusion";

for (let char of name) {
  console.log(char);
}

const myNamee = "Hasib"
for (let name of  myNamee) {
  console.log(`Char gulo holo -> ${name}`);
  
}


// 2nd Example ================== >> 2nd Example ========= <<<<<<<<<<====
const person = {
    name: "Manush",
    age: 30,
    profession: "developer"
  };
  
  for (let [key, value] of Object.entries(person)) {
    console.log(key + ": " + value);
  }

// 3rd Example ================== >> 3rd Example ========= <<<<<<<<<<====

  const person3 = {
    name:'Hasib',
    city:'Rajshahi',
    age:30,    Profashion:'cyber Expart',
    jodAt:'Google'
  };

  for (let [key,value] of Object.entries(person3)){
    console.log(key+ ":" +value);
    
  }

// 4th Example ================== >> 4th Example ========= <<<<<<<<<<====

  const personName = "Fahim Hasan"

  for(let char of personName){
    console.log(`  ${char}`);
    
  }

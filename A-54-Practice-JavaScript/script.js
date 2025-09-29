// const say = "programmer";
// console.log(`Hello, ${say}`);
// const Dream = "Hard Working"
// if (Dream === "Hard Working" && "Keep Learnig") {
//     console.log("You Success");
  
// }
// else {
//     console.log("You Loss" );
    
// }




// function person  (firstName, lastName, age, dream) {

//     return {
//         firstName, lastName, age, dream
//     }
    
// }


// const LastName = 'Hasan'
// const Age = 17
// const Dream = "Cybar Expart"

// console.log(FirststName);
// console.log(LastName);
// console.log(Age);
// console.log(Dream);

 
// const shop = [ 
// {product:'Book', Price:50,},
// {product:'Pen', Price:20,},
// {product:'Cap', Price:150}


// ]

// const shopProduct = shop.map(item => item.Price)
// console.log(shopProduct);


// const shop = [
//     { product: 'Book', Price: 50 },
//     { product: 'Pen', Price: 20 },
//     { product: 'Cap', Price: 150 }
//  ];
 
//  const shopProduct = shop.map(item => item.Price);
//  console.log(shopProduct);
 

// const person  = ({ firstName, lastName,age,dream }) => {
// console.log(`First Name ${firstName}`);
// console.log(`Last Name ${lastName}`);
// console.log(`Age  ${age}`);
// console.log(`Dream ${dream}`);

// }
// const personOne = {
// firstName:"Hasib",
// lastName:"Hasan",
// age:17,
// dream:"Cyber Expart"
// }
// person(personOne)

// const personTow = {
//     name:"Hasib Hasan",
//     age:17,
//     want:"Cyber Expar "
// }

// const  { name ,age,want} = personTow;
// console.log(`My Full Name ${name}`);
// console.log(`My Age ${age}`);
// console.log(`I Want To Be job of  ${want}`);



class Person1 {
    constructor(name, age, home) {
        this.name = name
        this.age = age
        this.home = home
        
    }
}


const PersonOne = new Person1("Hasib", 17,"Laxmipur");
console.log(PersonOne);



class Person {
    static Call() {
        console.log("Heyy");
        
    }
}


Person.Call()



class User {
   static count = 1
   static increment(){
    User.count++
   }
}
User.increment();

console.log(User.count);
User.increment();
console.log(User.count);



class Users {
    static useCount = 1
   constructor(useName){
    this.useName = useName
    Users.useCount++
   }


   hi(){
    console.log(`Tar Name => ${this.useName}`);
    
   }

}

const user1 = new Users(`Hasib`)
console.log(` User Count: ${Users.useCount}`);
user1.hi()








// let userCount  = 1
// function increment () {
//     userCount++

    
// }


// increment ()
// increment ()
// increment ()

// console.log(userCount);









//           ====> Practice Date => 2/12/24 & 3/12/24  <<=

// const  person = {
//     firstName:'Hasib',
//     lastName:'Hasan',
//     set fullName(fullName) {
// this.firstName = fullName
//     }

// }
// person.fullName ='Fahim'
// console.log(person);






//      ====>   Example Of   Synchronous <<
//           ====> Practice Date => 4/12/24  <<=

// const func = () =>  {
//     console.log('this Pandding..');

//     let time  = new Date().getTime()
//     while(time + 2000 >= new Date().getTime()){
//         console.log('Complete');
        
//     }
    
// }

// console.log('First ');
// func()
// console.log('Last');



//      ====>   Example Of   Synchronous <<=
//           ====> Practice Date => 4/12/24  <<=

setTimeout(() => {
    console.log('Task 1');
    
}, 5000);
console.log('Task2');
console.log('Task3')
console.log('Task4')




//      ====>   Example Of   Asynchronous <<=













   
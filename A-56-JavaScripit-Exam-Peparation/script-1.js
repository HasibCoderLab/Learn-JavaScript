// ==========Asynchronous========

//  ======= 1st  Example=========

// const  hello = callback =>{
//     console.log('heyy');
//   callback()
    
// }

// const wait =  () => {
//     console.log('Wait For Me');
    
// }

// const go = () => {
//     console.log('Now You  Go ');
    
// } 

// hello(wait)



//  ======= 2nd  Example=========

// const hello1 = () =>{
//     console.log('Heeeyyy');
    
// }


// const wait1 = callback =>{
//     console.log('Plz W8');
//      callback()
// }

// const go1 = () =>{
//     console.log('Plz Go ');
    
// }


// wait1(go1)

// //  ======= 3rd  Example=========

// const sum  = (callback , x,y) =>{
// const result  =  x * y 
// callback(result)
// const display  = result =>{
//     document.getElementById('h1').textContent = result
// }
// sum(display)
// }


//  ======= 4th  Example=========
// const greet = (name , callback) =>{
//     console.log('hello');
//     callback(name)
// }

// const displayName  =  name =>{
//     console.log(`hello ${name}`);
    
// }

// setTimeout(greet,5000, 'shanto ',  displayName)



// const Name = (name , callback ) =>{
//     console.log('heyyy')
//     callback(name)
 
 
// }

// const outPut = name =>{
//     console.log(`hello ${name}`);
    
// }

// setTimeout(Name , 5000, 'Java Script' , outPut)



// ============== For - in ==========

// const backti = {
//     name: "hasib",
//     age :17, 
//     country: 'Bangladesh',
//     job:' Web'


// }
// for(let i in backti) {
//     let result  = i.charAt(0).toUpperCase() +i.slice(1,0)
//         console.log(`${result} -> ${backti[i]}`);
    
//        }

    


// const person = {
//     name:'Anabiya',
//     age:1,
//     country:"Italy",
//     job:'Pichhi'
// }

// for(let i in person){
//     let result = i.charAt(1).toUpperCase() + i.slice(1,0);
//     console.log(`${result} => ${person[i]}`);
    
// }



const person1 = {
    name:'shanto',
    age:21,
    country:"Bangladesh",
    job:'Dev'
}

for(let i of Object.keys(person1)){
    console.log(i);
    
}

const person = ['shanto', 'Mahfuz','sharmin','Ilham'];
const filterPerson = person.filter(per => per.toLowerCase().startsWith(''));
console.log(filterPerson);



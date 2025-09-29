class Animal {
    constructor( name, age){
        this.name = name
        this.age = age
    }
}


class Cow extends Animal {
    constructor( name , age , runSpeed) {
        super(name,age)
        this.runSpeed = runSpeed 
    }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name,age)
    
        this.swimSpeed = swimSpeed
    }
}

const cow = new Cow("cow", 20, 40) ;
const fish = new Fish("Prihana", 40, 10) ;
console.log(cow.name , cow.age, cow.runSpeed );
console.log(fish.name , fish.age, fish.swimSpeed);

// console.log( cow.age);
// console.log (cow.runSpeed);

class Parent {
    constructor(name, age, job, future) {
        this.name = name
        this.age = age
        this.job = job
        this.future= future
        
    }
}

class Hasib extends Parent{
    constructor(name,age, job, future) {
        super(name,age,job, future)
    
        
    }
}

class Farmid  extends Parent {
    constructor(name,age, job,future ) {
        super(name,age, job, future)
      
    }
}

const hasib = new Hasib("Hasib",0,"Bekar","I Want Marrid  With ....");
const farmid = new Farmid("Farmid", 16,"Student","doctor");

console.log(farmid.name,farmid.age,farmid.job, farmid.future);
console.log(`${hasib.name},${hasib.age},${hasib.job},${hasib.future}`);



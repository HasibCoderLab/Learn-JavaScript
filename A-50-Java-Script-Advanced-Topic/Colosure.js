
  // ===>>>> Closure =====>>>> Closure ===>>>> Closure =====>>>>>>>>> 



  // 1st Example ================== >> 1st Example    <<<<<<<<<<====

  function  ounterFunction() {
    let outVar = "I am a Outer Scope";
  
    function  innerFunction() {
      console.log(outVar);
      
    }
   return  innerFunction
  
   } 
  
   const mycolosure =  ounterFunction()
  
   mycolosure()
  
  
   // 2nd Example ================== >> 2nd Example    <<<<<<<<<<====
  
  
   const makingFuntion = () =>{
    const name = "Hasib";
    const outPut = () =>{
      console.log(name);
      
    }
  
    return outPut
   }
  
   const result2 = makingFuntion()
   result2()
  
  // 3rd Example ================== >> 3rd Example    <<<<<<<<<<====
  
  
   const ParnFun = () =>{
  const YtName = "Code Fusion"
  
  const Out = () => {
    console.log(YtName);
    
  }
  return Out
   }
  
   const  result3 =   ParnFun()
   result3()
  
  
   // 4th Example ================== >> 4th Example    <<<<<<<<<<====
  
  const sum  = () => {
  let  count = 0 ;
  return () =>{
    count++
    console.log(count);
    
  }
  }
  
  const result4 = sum()
  result4()
  result4()
  
   // 5th Example ================== >> 5th Example    <<<<<<<<<<====
  
  const multiply = (a) => (b) => a * b 
  const multiplyBy2 = multiply(2)
  console.log(multiplyBy2(5));
  
  const multiplyBy3 = multiply(10)
  console.log(multiplyBy3(2));
  
  
    // 6th Example ================== >> 6th Example    <<<<<<<<<<====
  
    const makeGreeting   = (greeing) => (name) => console.log(`${greeing}, ${name}`);
    const sayHello = makeGreeting ("Hello");
  sayHello("Hasib")
   
  
  const sayHi = makeGreeting ("hi")
  sayHi("Bro")
    
  
  const makeGreeting1 = (greeting) => (name) => console.log(`${greeting}, ${name}`);
  const sayHello1 = makeGreeting1("Hello");
  sayHello("Hasib");
  
  const sayHi1 = makeGreeting1("hi");
  sayHi1("Bro");
  
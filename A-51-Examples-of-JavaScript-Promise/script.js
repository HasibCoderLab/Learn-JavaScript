
const walkDog = () =>{
    return new Promise (resolve =>{
        setTimeout (() => {
            resolve("walk the Dog")
        },3000)
    })
}

const trash = () =>{
    return new Promise (resolve =>{
        setTimeout (() => {
            resolve("Chake Out The Trash")
        },3000)
    })
}

walkDog()
.then(value => {
    console.log(value);
    return trash()
})


.then(value => {
    console.log(value);
})


const walkDog1 = () =>{
    return new Promise (( resolve, reject )=>{
        setTimeout (() =>{
const trashhh = false
if(trashhh){
    resolve(` take out the trash`)
}


else{
    reject(`don't take out the trash `)
}
        },3000)
    })
}


const trashh = () =>{
    return new Promise (( resolve, reject )=>{
        setTimeout (() =>{
const trashhh = false
if(trashhh){
    resolve(` take out the trash`)
}


else{
    reject(`don't take out the trash `)
}
        },3000)
    })
}
walkDog1()
.then(value => {
    console.log(value)
    return trashh()
})

.then(value =>{
    console.log(value);
    
})

.catch(error => console(`Error => ${error}`)
)

let coffee = new Promise ((resolve ,reject) =>{
    if(true){
        return resolve()

}

else{
    return reject()
}
    })


    coffee.then(() =>{
        console.log(`resolve it`);
        
    })

    .catch(() =>{
        console.log(`rejected it`);
        
    })

let math = new  Promise ((resolve, rejerct) => {
    let number = Math.floor(Math.random () *10)
 
    console.log(number)
    if(number<5){
        return resolve()
    }

    else{
        return rejerct()
    }
    
})

math.then(() =>{
    console.log(`below`);
    
}).catch(() => {
    console.log(`above`);
    
})




let stepOne = new Promise(resolve => {
    setTimeout (() => {
        resolve(` Step One Copmlate`)
    },3000)
})

let stepTwo = new Promise (resolve =>{
    setTimeout (() => {
        resolve(` Step Two Copmlate`)
    },6000)
})

stepOne.then(value => console.log(value))
stepTwo.then(value => console.log(value))

Promise.all([stepOne,stepTwo]).then(value => {
    return console.log(value);
    
})

Promise.race([stepOne,stepTwo]).then(value => {
    return console.log(value)
})

const radomUser = () =>{
fetch(`https://randomuser.me/api/`)
.then(rawData => {
    return rawData.json()
})
.then(data => console.log(data))
.catch(() => {
    console.log("no data ok");
    
})
}

radomUser()


// ============== Example - 6 ================

// const prepareDinner = () => {
    
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Dinner Prepared");
//         }, 3000);
//     });
// };

// const serveDinner = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Dinner Served");
//         }, 2000);
//     });
// };

// // Task Execution
// prepareDinner()
//     .then((result) => {
//         console.log(result); // "Dinner Prepared"
//         return serveDinner();
//     })
//     .then((result) => {
//         console.log(result); // "Dinner Served"
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     });

// ============== Example - 7 ================


const brushTeeth = () =>{
    return new Promise (( resolve ) =>{
        setTimeout(() =>{
            resolve("Teeth Brushed")
        },1000)
    })
}

const haveBreakfast = () =>{
    return new Promise (( resolve ) =>{
        setTimeout(() =>{
            resolve("Breakfast Done")
        },2000)
    })
}
const goToWork = () =>{
    return new Promise (( resolve ) =>{
        setTimeout(() =>{
            resolve("Reached Office")
        },3000)
    })
}



brushTeeth()
.then((result) =>{
    console.log(result);
    return haveBreakfast()
})

.then((result) =>{
    console.log(result);
    return goToWork()
})

.then((result)=>{
    console.log(result);
    
})

.catch((error)=>{
    console.error("Error:" ,error)
})

// ============== Example - 8 - Promise.race ================

const downloadFile = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("File Downloaded");
        }, 5000);
    });
};

const checkCache = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Cache Hit: File Found");
        }, 1000);
    });
};

// Execute with race
Promise.race([downloadFile(), checkCache()])
    .then((result) => {
        console.log("First task completed:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
const arrry = [ 1,2,3,4,5]
const result = arrry.map(num=>num*2)
console.log(result);

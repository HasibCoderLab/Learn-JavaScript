const func = async () => {
    return `hyyyyyy`
}

console.log(func());

const func1 = async () => {
    return     Promise.resolve (`hyyyyyy`)
}

console.log(func1());


const randomUser = async () => {
    let fetchh =  await fetch (`https://randomuser.me/api/`)
    let rawData = await fetchh.json()
    console.log(rawData);
    console.log(`my Title is ${rawData.results[0].name.title} And My First Name ${rawData.results[0].name.first}  And My last Name ${rawData.results[0].name.last} And My Geender `);
    
    
}
randomUser()


const randomQuote = [
    'Quality is not an act, it is a habit',
    'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.',
    'Life is 10% what happens to you and 90% how you react to it.',
    'If you are going through hell, keep going.',
    'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.',
    'With the new day comes new strength and new thoughts.',
  ];

  

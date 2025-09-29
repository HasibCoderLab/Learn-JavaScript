
function outer() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2



function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
function sayGoodbye() {
    console.log("Goodbye!");
}
greet("John", sayGoodbye);


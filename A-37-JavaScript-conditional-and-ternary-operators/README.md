# JavaScript Conditional and Ternary Operators

This repository contains various JavaScript examples showcasing `if-else` statements and the conditional (ternary) operator. It demonstrates multiple real-world use cases, including number checks, leap year determination, voting eligibility, and more.

## 📌 Features
- **If-Else Statements**: Covers different conditions with multiple cases.
- **Ternary Operator**: Simplified conditional expressions.
- **ES6 Features**: Arrow functions, template literals, and more.
- **Practical Examples**: Number checks, leap years, voting eligibility, and more.

## 🚀 Examples
### If-Else Statements
```js
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log(checkNumber(10));  // Output: "Positive"

Ternary Operator

const checkNumber = (num) => num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(checkNumber(-7));  // Output: "Negative"
````````````



📂 File Structure
`````
/project-root
│── script.js      # JavaScript logic
│── index.html     # HTML file to load the script
│── README.md      # Project documentation
``````````````


🛠️ How to Use
-**1.Clone this repository:
```
git clone https://github.com/HasibCoderLab/JavaScript-conditional-and-ternary-operators.git
````

-**2.Open index.html in a browser.
-**3.Check the console for outputs.


📜 License
This project is open-source and available under the MIT License.

Happy Coding! 🚀



//  ====================   1st Task 👇👇👇👇👇 =============== 
 
 
 // Added grade calculation logic for student marks

 const marks = [
    { name: "Hasib", Marks: 95 },
    { name: "Mahi", Marks: 42 },
    { name: "Rakib", Marks: 45 },
    { name: "Sami", Marks: 105 }
];

const gradeCalculator = (name, Marks) => {
    if (Marks > 100 || Marks < 0) {
        return `${name}, Invalid marks.`;
    } else if (Marks >= 90) {
        return `${name}, your grade is A+.`;
    } else if (Marks >= 80) {
        return `${name}, your grade is A.`;
    } else if (Marks >= 70) {
        return `${name}, your grade is B.`;
    } else if (Marks >= 60) {
        return `${name}, your grade is C.`;
    } else if (Marks >= 50) {
        return `${name}, your grade is D.`;
    } else {
        return `${name}, your grade is F.`;
    }
};

marks.forEach(student => {
    console.log(gradeCalculator(student.name, student.Marks));
});

  

 
 // ====================   2nd Task 👇👇👇👇👇 ===============

 const products = [
    { name: "Laptop", category: "Electronics", price: 45000 },
    { name: "Mobile", category: "Electronics", price: 15000 },
    { name: "Book", category: "Stationary", price: 500 },
    { name: "Pen", category: "Stationary", price: 50 },
    { name: "Table", category: "Furniture", price: 700 },
];

const filterAffordableProducts = () => {
    let affordableProducts = [];
    let expensiveFound = false;

    products.forEach(product => {
        if (product.price > 10000) {
            expensiveFound = true;
        } else if (product.price < 1000) {
            affordableProducts.push({
                ...product,
                note: "Affordable product",
            });
        }
    });

    if (expensiveFound) {
        console.warn("Warning: Some products are very expensive!");
    }
    
    return affordableProducts;
};

console.log(filterAffordableProducts());
 
 
 
 // ====================   3rd Task 👇👇👇👇👇 ===============
 
 const employees = [
    { name: "Alice", salary: 50000, performanceRating: "Excellent" },
    { name: "Bob", salary: 40000, performanceRating: "Good" },
    { name: "Charlie", salary: 30000, performanceRating: "Average" },
    { name: "Dave", salary: 20000, performanceRating: "Poor" },
];

const calculateBonus = (employees) => {
    return employees.map(employee => {
        let bonus = 0;

        if (employee.performanceRating === "Excellent") {
            bonus = employee.salary * 0.20;
        } else if (employee.performanceRating === "Good") {
            bonus = employee.salary * 0.10;
        } else if (employee.performanceRating === "Average") {
            bonus = employee.salary * 0.05;
        }

        return { 
            name: employee.name, 
            salary: employee.salary, 
            bonus, 
            performanceRating: employee.performanceRating 
        };
    });
};

const results = calculateBonus(employees);

results.forEach(employee => {
    console.log(`${employee.name}: Rating - ${employee.performanceRating}, Bonus - ${employee.bonus}`);
});

 
// Task 1: Store Ineventory
let products = ["Outdoor 4k Camera", "Smoke Detector", "PeaGlass Break Detector", "Doorbell 4k Camera", "Sensors"];
products.push("Panel");
products.pop();
console.log("Updated Product List:", products);

//Task 2: Student Scores
let scores = [85, 88, 90, 95, 99];
scores[1] = 70;
let averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log("Updated Scores:", scores);
console.log("Average Score:", averageScore);

//Task 3: Employee Records
let employee = {
    name: "Henrique Ribeiro",
    age: 21,
    department: "Vivint Sales",
    isActive: true
};
employee.department = "Operations";
employee.position = "Manger";
console.log("Updated Employee Record:", employee);

//Task 4: Customer Database
let customers = [
    { name: "Fabi", email: "fabulosa@usf.edu", purchaseAmount: 600 },
    { name: "Javo", email: "eljavokir@usf.edu", purchaseAmount: 100 },
    { name: "Juan", email: "juanaldo@usf.edu", purchaseAmount: 200 }
];
customers.push({ name: "Henry", email: "henry@usf.edu", purchaseAmount: 300 });
console.log("Customer List:", customers);

//Task 5: Order Processing System
let order = {
    orderId: 873,
    customerName: "Teo",
    amount: 600,
    calculateTax: function () {
        return this.amount * 0.09;
    }
};
console.log("Order Details:", order);
console.log("Tax Amount:", order.calculateTax());
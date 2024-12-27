let result = document.getElementById('paragraph');
let salary = 1000;
const salaryAmount = 1000;
const rent = 375;
const bills = 250;

function pay(ammount) {
	salary = salary - ammount;
}
pay(rent);
pay(bills);

let totalExpenses = salaryAmount - salary;

console.log(`Total expenses: ${totalExpenses}`);
console.log(`Amount left: ${salaryAmount - totalExpenses}`)
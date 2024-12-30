const orders = [
  { id: 1, item: "Laptop", quantity: 2 },
  { id: 2, item: "Phone", quantity: 1 },
  { id: 3, item: "Tablet", quantity: 3 },
];

for (let i = 0; i < orders.length; i++) {
  console.log(`Order ID: ${i + 1}, order name ${orders[i].item}`);
}

for (const order of orders) {
  console.log(`Order name: ${order.item}`);
}

// let validEmail = "bob@email.com";
// let email = prompt("eneter your email:");
// while (email !== validEmail) {
//   email = prompt("Invalid email! Try again");
// }
// console.log("Thank you, you email is correct");

// DO WHILE
// let validEmail = "bob@email.com";
// let email = "";
// do {
//   email = prompt("eneter your email:");
// } while (email !== validEmail);
// console.log("Thank you, you email is correct");

// let attempts = 5;
// for (let i = 0; i < attempts; i++) {
//   const element = array[i];
// }

function validateEmail() {
  let validEmail = "bob@email.com";
  let email = "";
  do {
    email = prompt("eneter your email:");
  } while (email !== validEmail);
  console.log("Thank you, you email is correct");
}

validateEmail();

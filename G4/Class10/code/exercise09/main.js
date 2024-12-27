let btn = document.getElementById("save");
function Phonebook(fname, lname, phone) {
	this.name = `${fname} ${lname}`;
	this.phone = phone;

}
let numbers = [];

btn.addEventListener("click", function () {
	let firstName = document.getElementById("firstName").value;
	let lastName = document.getElementById("lastName").value;
	let phoneNumber = document.getElementById("phoneNumber").value;
	let user = new Phonebook(firstName, lastName, phoneNumber)
	let table = document.getElementById("phoneBook");

	console.log(user);
	numbers.push(user)
	console.log(numbers);
	table.lastElementChild.innerHTML = "";
	for (let item of numbers) {
		let row = document.createElement("tr")
		let colName = document.createElement("td")
		let colPhone = document.createElement("td")
		colName.innerText = item.name
		colPhone.innerText = item.phone
		row.appendChild(colName);
		row.appendChild(colPhone);
		table.lastElementChild.appendChild(row)

	}

})
function updateTable() {


}



let button = document.getElementById('button')
button.addEventListener("click", function () {
	let num = document.getElementById("num").value
	let givennumber = 13;
	let res;
	let result = document.getElementById("result")
	if (num > givennumber) {
		res = (num - givennumber) * 2
	} else {
		res = (givennumber - num);
	}
	result.innerText = `result: ${res}`;
})
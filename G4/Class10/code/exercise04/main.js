$(document).ready(function () {
	let btn = $('button');
	let fixNum = 100;

	btn.on('click', function () {
		let firstI = $('#num').val();
		let secI = $('#numTwo').val();
		if (firstI < 0 || secI < 0) {
			alert(`invalid input`)
		} else {
			let firstRes = fixNum - firstI;
			let secRes = fixNum - secI;

			if (firstRes > secRes) {
				console.log(`Output: ${secI} closer to ${fixNum}`);

			} else {
				console.log(`Output: ${firstI} closer to ${fixNum}`);
			}
		}

	})

})
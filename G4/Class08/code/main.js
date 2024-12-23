// $(document).ready -> executed once the DOM is fully ready for manipulation
$(document).ready(function () {
	// JavaScript document select by id
	let jsButton = document.getElementById('my-button');
	let jQueryButton = $('#my-button');

	// select all elements
	let allElements = $('*');
	console.log('All elements: ', allElements);

	// get the elements by id
	let mainTitle = $('#mainTitle');
	console.log('Main title: ', mainTitle[0]);

	// get elements by class
	let byClass = $('.innerWrapper');
	console.log('By class: ', byClass);

	// get all elements from the page and then select the first one
	let allElementsFirst = $('*').first();
	console.log(allElementsFirst);

	// get all h3 elements then select the last one
	let allH3Last = $('h3').last();
	console.log(allH3Last);

	// select all elements with class 'innerWrapper', then select the last one of them
	// then within the last element, find all paragraphs, then select the first paragrap, and get the HTML of that paragraph
	let element1 = $('.innerWrapper').last().find('p').first().html();
	console.log(element1);

	// get all divs, then select the first one
	let div = $('div').first();
	console.log(div);

	// get all h1, then select the last one
	let lastH1 = $('h1').last();
	console.log(lastH1);

	// get all h3, then select the first one
	let firstH3 = $('h3').first();
	console.log(firstH3);

	// get the 3rd paragraph
	let paragraph = $('p:nth-child(3)');
	console.log(paragraph);

	// get all button elements, then select the first one
	let btn = $('button').first();
	console.log(btn);

	// get all h1 elements, select the first one and change the innerText to 'Changed H1'
	let h1Text = $('h1').first().text('Changed H1');
	console.log(h1Text)

	// get element with id 'secondwrapper' and change its innerHTML
	let htmlElement = $('#secondwrapper').html('<button>click</button>');
	console.log(htmlElement);

	// select all paragraphs, select the last one of them, change the styles
	$('p').last().css('color', 'red');
	$('p').last().css('background-color', 'green');

	// select all paragraphs, select the last one of them, after it add h1
	$('p').last().after('<h1>Last h1</h1>')

	// get all h1 elements, select the first one, change its innerText
	$(`h1`).first().text(`JQuery is Awesome`);

	// get all h1 elements, select the first one, after it add a paragraph with some text
	$(`h1`).first().after(`<p>Some text after first header</p>`);

	// select all buttons, change the styles
	$(`button`).css(`background-color`, `red`);

	// state management to keep track if something is changed or not
	let isChanged = false;

	// get all buttons, and select the first one
	let buttonAction = $('button').first();

	// on that button, add 'click' event listener
	buttonAction.on('click', function (event) {

		// if content is changed
		if (isChanged) {
			// revert the changes
			$('#secondwrapper').show();
			$('p').css('color', 'black');
			$('button').text('FIrst!');

			// change the flag to false (content is now not changed)
			isChanged = false;
		} else {
			// make some changes
			$('#secondwrapper').hide();
			$('p').css('color', 'red');
			$('button').text('Dont click me!');

			// change the flag to true (content is now changed)
			isChanged = true;
		}

	})

	// get all elements with id 'get'
	let button = $('#get');

	// add event listener on 'click' event
	button.on('click', function () {
		let input1 = $('#input1').val();
		let input2 = $('#input2').val();
		let input3 = $('#input3').val();
		let res = (parseInt(input1) + parseInt(input2) + parseInt(input3)) / 3;
		if (res >= 10) {
			$('#result').text(res).css('color', 'red');
		} else {
			$('#result').text(res).css('color', 'green')
		}
	})

});
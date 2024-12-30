let button = document.getElementById('btn')
button.addEventListener('click', function () {
	let who = document.getElementById('who').value;
	let what = document.getElementById('what').value;
	let when = document.getElementById('when').value;
	storyTeller(who, what, when);
});

function storyTeller(koj, sto, koga) {
	let story = document.getElementById('story');
	story.innerText = `${koj} was really strong ${sto} in the ${koga}`
}
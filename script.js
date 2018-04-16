const kilogramsInput = document.querySelector('#kilograms > input');
const poundsInput = document.querySelector('#pounds > input');
const newtonsInput = document.querySelector('#newtons > input');

function scrollFunction() {
	window.scrollTo(0, 1000000);
}

function roundNum(num) {
	return Math.round(num * 100) / 100;
}
function kilogramConversion() {
	const kmass = parseFloat(kilogramsInput.value);
	const pmass = kmass / 0.45359237;
	const nmass = kmass * 9.807;
	poundsInput.value = roundNum(pmass);
	newtonsInput.value = roundNum(nmass);
}

function poundsConversion() {
	const pmass = parseFloat(poundsInput.value);
	const kmass = pmass * 0.45359237;
	const nmass = pmass * 4.4482216;
	kilogramsInput.value = roundNum(kmass);
	newtonsInput.value = roundNum(nmass);
}

function newtonsConversion() {
	const nmass = parseFloat(newtonsInput.value);
	const kmass = nmass * 0.101971621;
	const pmass = nmass * 0.2248;
	kilogramsInput.value = roundNum(kmass);
	poundsInput.value = roundNum(pmass);
}

function main() {
	kilogramsInput.addEventListener('input', kilogramConversion);
	poundsInput.addEventListener('input', poundsConversion);
	newtonsInput.addEventListener('input', newtonsConversion);
}

main();
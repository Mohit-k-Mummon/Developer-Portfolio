'strict';

// Variables

// Form
const form = document.getElementById('form');

// Inputs
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const messageInput = document.getElementById('message-input');

// Button
const submitButton = document.getElementById('submit-btn');

nameInput.addEventListener('input', event => {
	let target = event.target.value;
	console.log(target);

	if (target.length > 0) {
		nameInput.style.borderBottom = '1px solid #4ee1a0';
		isValid = true;
	} else {
		nameInput.style.borderBottom = '1px solid red';
		isValid = false;
	}
});

emailInput.addEventListener('input', event => {
	let target = event.target.value;
	if (isEmail(target)) {
		emailInput.style.borderBottom = '1px solid #4ee1a0';
		isValid = true;
	} else {
		emailInput.style.borderBottom = '1px solid red';
		isValid = false;
	}
});

function validate(event) {
	// State
	let isValid = false;

	// Prevent Default
	event.preventDefault();
}

// Regex function
function nameValidate(input) {
	return /^[A-Z][a-z]+\s[A-Z][a-z]+$/gi.test(input);
}

function isEmail(input) {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}

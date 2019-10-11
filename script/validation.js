let email = {},
	password = {},
	signInButton;
const getDOMElements = () => {
	email.field = document.querySelector('.js-email-field');
	email.errorMessage = document.querySelector('.js-email-error-message');
	email.input = document.querySelector('.js-email-input');

	password.field = document.querySelector('.js-password-field');
	password.errorMessage = document.querySelector('.js-password-error-message');
	password.input = document.querySelector('.js-password-input');

	signInButton = document.querySelector('.js-sign-in-button');
};
const enableListeners = () => {
	email.input.addEventListener('blur', e => {
		if (!isValidEmailAddress(e.target.value)) {
			if (isEmpty(e.target.value)) {
				email.errorMessage.innerHTML = 'This field is required';
				addErrors(email);
			} else {
				email.errorMessage.innerHTML = 'Invalid email address';
				addErrors(email);
			}
			email.input.addEventListener('input', doubleCheckEmail);
		} else {
			removeErrors(email);
		}
	});
	password.input.addEventListener('blur', e => {
		if (!isValidPassword(e.target.value)) {
			if (isEmpty(e.target.value)) {
				password.errorMessage.innerHTML = 'This field is required';
				addErrors(password);
			} else {
				password.errorMessage.innerHTML = 'Password must be longer than 1 char';
				addErrors(password);
			}
			password.input.addEventListener('input', doubleCheckPassword);
		} else {
			removeErrors(password);
		}
	});
	signInButton.addEventListener('click', e => {
		if (isValidEmailAddress(email.input.value) && isValidPassword(password.input.value)) {
			console.log('Passed validation', email.input.value, password.input.value);
			e.preventDefault();
		} else {
			e.preventDefault();
		}
	});
};
const doubleCheckEmail = e => {
	if (isValidEmailAddress(e.target.value) && !isEmpty(e.target.value)) {
		removeErrors(email);
		email.input.removeEventListener('input', doubleCheckEmail);
	}
};
const doubleCheckPassword = e => {
	if (isValidPassword(e.target.value) && !isEmpty(e.target.value)) {
		removeErrors(password);
		password.input.removeEventListener('input', doubleCheckPassword);
	}
};
const isValidEmailAddress = function(emailAddress) {
	// Basis manier om e-mailadres te checken.
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};
const isEmpty = function(fieldValue) {
	return !fieldValue || !fieldValue.length;
};
const isValidPassword = password => {
	return password.length > 0;
};
const addErrors = ob => {
	ob.field.classList.add('has-error');
};
const removeErrors = ob => {
	ob.field.classList.remove('has-error');
};
document.addEventListener('DOMContentLoaded', function() {
	getDOMElements();
	enableListeners();
});

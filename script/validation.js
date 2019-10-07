let email = {},
	password = {},
	signInButton;
const getDOMElements = () => {
	email.errorMessage = document.querySelector('.js-email-field');
	email.input = document.querySelector('.js-email-error-message');
	email.field = document.querySelector('.js-email-input');

	password.errorMessage = document.querySelector('.js-password-field');
	password.input = document.querySelector('.js-password-error-message');
	password.field = document.querySelector('.js-password-input');

	signInButton = document.querySelector('.js-sign-in-button');
};
const enableListeners = () => {
	email.field.addEventListener('blur', e => {
		if (!isValidEmailAddress(e.target.value)) {
			if (isEmpty(e.target.value)) {
				email.input.innerHTML = 'This field is required';
				addErrors(email);
			} else {
				email.input.innerHTML = 'Invalid email address';
				addErrors(email);
			}
			email.field.addEventListener('input', doubleCheckEmail);
		} else {
			removeErrors(email);
		}
	});
	password.field.addEventListener('blur', e => {
		if (!isValidPassword(e.target.value)) {
			if (isEmpty(e.target.value)) {
				password.input.innerHTML = 'This field is required';
				addErrors(password);
			} else {
				password.input.innerHTML = 'Password must be longer than 1 char';
				addErrors(password);
			}
			password.field.addEventListener('input', doubleCheckPassword);
		} else {
			removeErrors(password);
		}
	});
	signInButton.addEventListener('click', e => {
		if (isValidEmailAddress(email.field.value) && isValidPassword(password.field.value)) {
			console.log('Passed validation', email.field.value, password.field.value);
			e.preventDefault();
		} else {
			e.preventDefault();
		}
	});
};
const doubleCheckEmail = e => {
	if (isValidEmailAddress(e.target.value) && !isEmpty(e.target.value)) {
		removeErrors(email);
		email.field.removeEventListener('input', doubleCheckEmail);
	}
};
const doubleCheckPassword = e => {
	if (isValidPassword(e.target.value) && !isEmpty(e.target.value)) {
		removeErrors(password);
		password.field.removeEventListener('input', doubleCheckPassword);
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
	ob.errorMessage.classList.add('has-error');
};
const removeErrors = ob => {
	ob.errorMessage.classList.remove('has-error');
};
document.addEventListener('DOMContentLoaded', function() {
	getDOMElements();
	enableListeners();
});

const init = () => {
	document.querySelector('.js-password-toggle').addEventListener('input', e => {
		document.querySelector('.js-password-input').type = !e.target.checked ? 'password' : 'text';
	});
};

document.addEventListener('DOMContentLoaded', function() {
	init();
});

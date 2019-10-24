const change = document.querySelectorAll('.controls input');

function picUpdate() {
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

change.forEach((change) => change.addEventListener('change', picUpdate));
change.forEach((change) => change.addEventListener('mousemove', picUpdate));

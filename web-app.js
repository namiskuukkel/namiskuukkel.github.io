const app = window.Telegram.WebApp;

app.ready();
app.expand();
console.log(app.initData);

const [errorer, btn, reset, count] = [
	/** @type {HTMLParagraphElement} */ (document.getElementById("errors")),
	/** @type {HTMLButtonElement} */ (document.getElementById("click")),
	/** @type {HTMLButtonElement} */ (document.getElementById("reset")),
	/** @type {HTMLParagraphElement} */ (document.getElementById("count")),
];

errorer.innerHTML = JSON.stringify(app.initDataUnsafe);
window.addEventListener("error", e => setError(e.toString()));

btn.addEventListener("click", () => {
	app.close();
});

reset.addEventListener("click", () => {
});

export {};

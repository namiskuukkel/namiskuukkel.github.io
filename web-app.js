const app = window.Telegram.WebApp;
const tele = window.Telegraf;
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
	var bot = new window.Telegraf('5000139198:AAErGQeD3g-_lzc5Vvrj8WkBaX3jBjtibdA', { telegram: { testEnv: true } });
	bot.telegram.answerWebAppQuery(app.initDataUnsafe.query_id, {
	id: "0",
	type: "article",
	title: "Hello Mini App!",
	input_message_content: {
		message_text: "This message was sent from answerWebAppQuery",
	},
});

reset.addEventListener("click", () => {
});

export {};

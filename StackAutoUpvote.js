function main() {
if (document.getElementsByClassName("js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer")[0].outerHTML.includes("aria-pressed=\"false\"")) {
document.getElementsByClassName("js-vote-up-btn grid--cell s-btn s-btn__unset c-pointer")[0].click();
}
}
setInterval(main, 3000);

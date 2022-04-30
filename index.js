const adviceNumber = document.getElementById("advice-number");
const adviceQuote = document.getElementById("advice-quote");
const changeQuoteButton = document.querySelector(".advice-button");

document.addEventListener("DOMContentLoaded", () => {
  init();
});

changeQuoteButton.addEventListener("click", () => {
  init();
});

const getQuote = async () => {
  const data = await fetch("https://api.adviceslip.com/advice");
  return data.json();
};

const init = async () => {
  const data = await getQuote();
  adviceNumber.innerText = data.slip.id;
  adviceQuote.innerHTML = String.raw`
    
    <span class="advice-quote">"${data.slip.advice}"</span>
  `;
};

import "./style.scss";
import "./media_se.scss";
import "./media_plus.scss";
import "./media_12.scss";


/// Set language
const languages = ["en", "ru", "es", "fr", "nl", "zh", "ja"];
let lang = navigator ? navigator.language.substring(0, 2).toLowerCase() : "en";
let htmlLang = document.querySelector("html");

const contentElements = Array.from(document.querySelectorAll("[data-content]"));

searchLang(languages);
getContentByLang().then();

const monthCard = document.querySelectorAll(".card")[0];
const annualCard = document.querySelectorAll(".card")[1];
const sale = document.querySelector(".sale");
const button = document.querySelector("button");

// Choose Sub
annualCard.classList.add("active"); // default
sale.classList.add("active"); // default

monthCard.addEventListener("click", (ev) => {
  if (annualCard.classList.contains("active")) {
    annualCard.classList.remove("active");
    sale.classList.remove("active");
  }
  ev.currentTarget.classList.add("active");
});

annualCard.addEventListener("click", (ev) => {
  if (monthCard.classList.contains("active")) {
    monthCard.classList.remove("active");
  }
  ev.currentTarget.classList.add("active");
  sale.classList.add("active");
});

button.addEventListener("click", () => {
  if (monthCard.classList.contains("active")) {
    document.location = "https://www.apple.com/";
  } else {
    document.location = "https://google.com/";
  }
});

// Functions

async function getContentByLang() {
  let response = await fetch(`assets/lang/${lang}.json`);
  let data = await response.json();

  contentElements.map((item) => {
    let dataset = item.dataset.content;
    item.innerHTML = data[dataset];
  });
}

function searchLang(langArr) {
  let query = window.location.search;
  let option = query.substring(6);
  if (query.startsWith("?lang=") && langArr.some((el) => el === option)) {
    lang = option;
    htmlLang.lang = lang;
  } else {
    return null;
  }
}

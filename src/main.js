import "./styles/style.scss";
import "./styles/media_se.scss";
import "./styles/media_plus.scss";
import "./styles/media_12.scss";
import {searchLang} from "./modules/searchLang";

/// Set language
const languages = ["en", "ru", "es", "fr", "nl", "zh", "ja"];
let lang = navigator ? navigator.language.substring(0, 2).toLowerCase() : "en";
let htmlLang = document.querySelector("html");

/// Elements
const contentElements = Array.from(document.querySelectorAll("[data-content]"));
const monthCard = document.querySelectorAll(".card")[0];
const annualCard = document.querySelectorAll(".card")[1];
const sale = document.querySelector(".sale");
const button = document.querySelector("button");

searchLang(languages, htmlLang, lang, contentElements)

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
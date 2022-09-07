import {getContentByLang} from "./getContentByLang";

export function searchLang(langArr, htmlLang, lang, arr) {
    let query = window.location.search;
    let option = query.substring(6);
    if (query.startsWith("?lang=") && langArr.some((el) => el === option)) {
        lang = option;
        htmlLang.lang = lang;
        getContentByLang(arr, lang).then()
    } else {
        getContentByLang(arr, lang).then()
    }
}
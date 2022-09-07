export async function getContentByLang(arr, lang) {
    let response = await fetch(`assets/lang/${lang}.json`);
    let data = await response.json();

    arr.map((item) => {
        let dataset = item.dataset.content;
        item.innerHTML = data[dataset];
    });
}
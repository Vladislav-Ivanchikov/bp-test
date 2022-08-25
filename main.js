/// Set language
const languages = ['en', 'ru', 'es', 'fr', 'nl', 'zh', 'ja']
let lang = navigator ? navigator.language.substring(0, 2).toLowerCase() : "en"

function searchLang(langArr) {
    let query = window.location.search
    let option = query.substring(6)
    if (query.startsWith('?lang=') && langArr.some(el => el === option)){
        lang = option
    }
    else {
        return null
    }
}

searchLang(languages)
getContentByLang().then()

//Header
const restore = document.querySelectorAll('.header-item')[1].children[0]

// Title
const title = document.querySelector('h1')

// Content
const contentItem1 = document.querySelectorAll('.text-item')[0].children[0]
const contentItem2 = document.querySelectorAll('.text-item')[1].children[0]
const contentItem3 = document.querySelectorAll('.text-item')[2].children[0]

// Sub
const monthCard = document.querySelectorAll('.card')[0]
const annualCard = document.querySelectorAll('.card')[1]
const monthSub = document.querySelectorAll('.sub-type')[0]
const annualSub = document.querySelectorAll('.sub-type')[1]
const monthPrice = document.querySelectorAll('.price')[0]
const annualPrice = document.querySelectorAll('.price')[1]
const monthLine = document.querySelectorAll('.line')[0]
const annualLine = document.querySelectorAll('.line')[1]
const perMonth = document.querySelectorAll('.per-month')[0]
const perAnnual = document.querySelectorAll('.per-month')[1]
const sale = document.querySelector('.sale')

// Button
const button = document.querySelector("button")

// Footer
const footerText = document.querySelector('.text')
const termsOfUse = document.querySelector('.links').children[0]
const privacyPolicy = document.querySelector('.links').children[1]

// Receive Content
async function getContentByLang () {
    let response = await fetch(`/lang/${lang}.json`)
    let data = await response.json()

    restore.textContent = data['Restore']
    title.innerHTML = data['Unlimited Access<br>to All Features']
    contentItem1.textContent = data['Unlimited documents']
    // contentItem2.textContent = data['???']
    contentItem3.textContent = data['Text recognition (OCR)']
    monthSub.textContent = data['Monthly']
    annualSub.textContent = data['Annually']
    monthPrice.innerHTML = data['Price month']
    annualPrice.innerHTML = data['Price year']
    monthLine.textContent = data['3 DAYS FREE']
    annualLine.textContent = data['MOST POPULAR']
    perMonth.textContent = data['{{price}}/month']
    perAnnual.textContent = data['{{price}}/month']
    sale.textContent = data['-83%']
    button.textContent = data['Continue']
    footerText.textContent = data['Auto-renewable. Cancel anytime.']
    termsOfUse.textContent = data['Terms of Use']
    privacyPolicy.textContent = data['Privacy Policy']
}

// Choose Sub
annualCard.classList.add('active') // default
sale.classList.add('active') // default

monthCard.addEventListener('click', (ev) => {
    if (annualCard.classList.contains('active')){
        annualCard.classList.remove('active')
        sale.classList.remove('active')
    }
    ev.currentTarget.classList.toggle('active')
})

annualCard.addEventListener('click', (ev) => {
    if (monthCard.classList.contains('active')){
        monthCard.classList.remove('active')
    }
    ev.currentTarget.classList.toggle('active')
    sale.classList.toggle('active')
})


button.addEventListener('click', () => {
    if (monthCard.classList.contains('active')){
        document.location = 'https://www.apple.com/'
    }else {
        document.location = 'https://google.com/'
    }
})

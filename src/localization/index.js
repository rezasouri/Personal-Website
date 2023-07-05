import en_us from './en'
import fa_ir from './fa'

const lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : 'fa'
export { lang }
const directions = {
    fa: "rtl",
    en: "ltr"
}
function getDirections() {
    return directions[lang]
}
export { getDirections }
const fonts = {
    fa: "IRANSans",
    en: "Muli"
}
function getFont() {
    return fonts[lang]
}
export { getFont }
const translates = {
    fa: fa_ir,
    en: en_us
}
function getTranslates() {
    return translates[lang]
}
export { getTranslates }
function changeLanguage(newLang) {
    if (newLang === lang) {
        return
    }
    localStorage.setItem('lang', newLang)
    window.location.reload()
}
export { changeLanguage }
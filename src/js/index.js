import data from "../Localizations/en.json"

console.log(data)


const deviceDefaultLanguage = () => {
    return (
        (navigator.languages && navigator.languages.length) ? navigator.languages[0] : 'en'
    );
}
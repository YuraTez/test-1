import data from "./components/localization"
import template from "./components/templateBanner"

const price = {
    month:
        {
            price: "$9.99",
            priceMonth: "$9.99",
        },
    year:
        {
            price: "$19.99",
            priceMonth: "$1.66",
        }
}

const banner = document.querySelector(".banner");

const deviceDefaultLanguage = () => {
    return (
        (navigator.languages && navigator.languages.length) ? navigator.languages[1] : 'en'
    );
}
const params = [...new URLSearchParams(window.location.search).entries()].reduce((r, [k,v]) => { r[k] = v; return r; }, {})

let lang = deviceDefaultLanguage();


const locationSearch = document.location.search


if(locationSearch === "" && data[lang] !== undefined){
    window.history.pushState("string", "search", "?" + "lang=" + lang);
    banner.innerHTML = template(data[lang], price);
}else if(data[params.lang]){
    banner.innerHTML = template(data[params.lang], price);
}else{
    banner.innerHTML = template(data["en"], price);
}


window.onload = function (){
    const subscription = document.querySelector(".subscription");
    const subscriptionElemList = subscription.querySelectorAll(".subscription__el");
    const subscriptionBtn = document.querySelector(".subscription-btn");

    subscription.addEventListener("click", function (){
        let target = event.target;
        if(target.classList.contains("subscription__el")){

            subscriptionElemList.forEach((el)=>{
                el.classList.remove("active");
            })
            target.classList.add("active");

            let url = target.getAttribute("data-url");
            subscriptionBtn.setAttribute("href" , url)

        }
    })
}

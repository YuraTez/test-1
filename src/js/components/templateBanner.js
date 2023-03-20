const template = (data, price)=>{
    return`
        <div class="banner-header">
            <a href="#" class="banner-header__cross"></a>
            <a href="#" class="banner-header__restore">${data["Restore"]}</a>
        </div>
     <div class="banner-container">
        <h1 class="title">${data["Unlimited Access<br>to All Features"]}</h1>

        <ul class="advantages-list">
            <li class="advantages-list__item">
            <svg><use xlink:href="images/sprite.svg#unLimit"></use></svg>
                ${data["Unlimited documents"]}
            </li>
            <li class="advantages-list__item">
            <svg><use xlink:href="images/sprite.svg#export"></use></svg>
               ${data["Count mode"]}
            </li>
            <li class="advantages-list__item">
            <svg><use xlink:href="images/sprite.svg#noAds"></use></svg>
             ${data["Text recognition (OCR)"]}
               
            </li>
        </ul>

        <div class="subscription">
            <div class="subscription__el  active" data-url="https://apple.com/">
                <div class="subscription__time">${data["Monthly"]}</div>
                <div class="subscription__price">
                    ${data["<strong>{{price}}</strong><br>per month"].replace('{{price}}', price.month.price)}
                </div>
                <div class="subscription__banner">
                   ${data["3 DAYS FREE"]}
                </div>
                <div class="subscription__month-price">
                    ${data["{{price}}/month"].replace('{{price}}/', price.month.priceMonth)}
                </div>
            </div>
            <div class="subscription__el subscription__el--sale" data-url="https://google.com/">
                <div class="subscription__time">${data["Annually"]}</div>
                <div class="subscription__price">
               ${data["<strong>{{price}}</strong><br>per year"].replace('{{price}}', price.year.price)}
                </div>
                <div class="subscription__banner">
                    ${data["MOST POPULAR"]}
                </div>
                <div class="subscription__month-price">
                ${data["{{price}}/month"].replace('{{price}}/', price.year.priceMonth)}
                </div>
                <span class="subscription-sale">${data["-83%"]}</span>
            </div>
        </div>

        <a href="https://apple.com/" class="subscription-btn">${data["Continue"]}</a>

        <p class="text-page">${data["Auto-renewable. Cancel anytime."]}</p>

        <div class="agreement">
            <a href="#" class="agreement__item">${data["Terms of Use"]}</a>
            <a href="#" class="agreement__item">${data["Privacy Policy"]}</a>
        </div>
    </div>
    `
}


export default template
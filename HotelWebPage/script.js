import getLocalJsonData from "./data-fetch.mjs";

const main = document.getElementById("main-page");
const hero = document.getElementById("hero");
const header = document.getElementById("header");
const list = document.getElementById("hotels-list")
const searchValue = document.getElementById("");
const allHotelsSearch = document.getElementById("all-hotels-page");
if (!header) {
    throw new Error("Header is null! There's no element with id 'header', create one!")
}

const section2 = document.getElementById("second-section");
if (!section2 || !list) {
    throw new Error("No second section found: there's no element with id = 'second-section', create one!!")
}


if (!main || !hero || !allHotelsSearch) {
    throw new Error("element doesn't exist, create one")
}

const comments = document.getElementById("comments");
const cards = comments.querySelectorAll("div");

if (!cards || !comments) {
    throw new Error();
}

const offers = document.getElementById("offers")
if (!offers) {
    throw new Error();
}
const offers_cards = offers.querySelectorAll("article")
if (!offers_cards) {
    throw new Error();
    
}

function heroPageBackgorund() {
    let count = 0;

    const paths = [
        "assets/hero/pexels-arabiclogos-453201_full.webp",
        "assets/hero/pexels-asman-chema-91897-594077_full.webp",
        "assets/hero/pexels-boonkong-boonpeng-442952-1134176(1)_full.webp",
        "assets/hero/pexels-pixabay-258154(1)_full.webp",
        "assets/hero/pexels-pixabay-261395_full.webp",
        "assets/hero/pexels-pixabay-262047(1)_full.webp",
        "assets/hero/pexels-thorsten-technoman-109353-338504_full.webp",
    ];

    setInterval(() => {
        if(count > paths.length) {
            count = 0;
        }

    const img = hero.querySelector("img");

    img.src = paths[count]
    


    count++;   
    }, 6000);

}

heroPageBackgorund();

let index = 0;

/**
 * 
 * @param {number} index 
 */

function commentsScroll(index) {
    
    const card = cards.item(index)
    const width = card.offsetWidth;


    comments.scrollTo({left: width * index, behavior: "smooth"})

}

setInterval(() => {

    if (index > cards.length - 1 ) {
        index = 0;
    }

    commentsScroll(index);
    index++;    

}, 3000)



const observer = new IntersectionObserver(
    (e) => {
        e.forEach((entry) => {
            if (entry.isIntersecting) {
                header.style.backgroundColor = "hsl(224deg, 76%, 48%)"; 
            } else {
                header.style.backgroundColor = "";          
            }
        })
    },
    {threshold: 0.5}
)

observer.observe(section2);




const images_offers = [
    "./assets/offers/valeriia-bugaiova-_pPHgeHz1uk-unsplash_full.webp",
    "./assets/offers/visualsofdana-T5pL6ciEn-I-unsplash_full.webp",
    "./assets/offers/popular-resort-amara-dolce-vita-luxury-hotel-with-pools-water-parks-recreational-area-along-sea-coast-turkey-sunset-tekirova-kemer_full.webp",
    "./assets/offers/bilderboken-rlwE8f8anOc-unsplash_full.webp",
    "./assets/offers/hotel-room-5858067_full.webp",
    "./assets/offers/tunisia-188536_full.webp",
    "./assets/offers/restaurant-1837150_full.webp",
    "./assets/offers/pexels-pixabay-262047_full.webp",
    "./assets/offers/pexels-boonkong-boonpeng-442952-1134176_full.webp",
    "./assets/offers/luxury-classic-modern-bedroom-suite-hotel_full.webp",
    "./assets/offers/indoors-4234072_1920_full.webp",
    "./assets/offers/pexels-pixabay-271624_full.webp",
    "./assets/offers/pexels-pixabay-260922_full.webp",
    "./assets/offers/cozy-studio-apartment-with-bedroom-living-space_full.webp",
    "./assets/offers/pexels-pixabay-164595_full.webp"
]




const data = await getLocalJsonData();

if (!data) {
    throw new Error();
}

for (let index = 0; index < data.length; index++) {


    offers.innerHTML += `
            <article class="offer-card-hotel" style="background-image: url(${images_offers[index]});">
                <div class="offer-rating-wrapper">
                    <div class="offer-rating-badge">
                        ⭐
                        <h2>${data[index].rating.average}</h2>
                    </div>
                </div>

                <div class="offer-footer">
                    <h1>Hotel ${data[index].id}</h1>
                    <button id="details-btn" class="offer-view-button" data-id="${data[index].id}" >Visualizar</button>
                </div>
            </article>

    `

    list.innerHTML += `
                        <div class="hotel-card">
                    <button class="favorite-btn">
                        <i class="far fa-heart"></i>
                    </button>

                    <img src="${images_offers[index]}" alt="">

                    <div class="hotel-card-info">
                        <h1>${data[index].name}</h1>
                        <div class="location">
                                <i class="fa fa-map-pin" aria-hidden="true"></i>
                                <div>${data[index].city}</div>
                                <div>${data[index].country}</div>
                        </div>
                        <div class="hotel-rating">⭐ 4.7</div>
                    </div>
                    <div class="hotel-card-middle">
                            
                    </div>

                    <div class="hotel-card-extra">
                            <button class="details-button">
                                Detalhes
                            </button>
                    </div>
                </div>
    `

}




const detailsBtns = document.querySelectorAll(".offer-view-button");

detailsBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        
        generateDetails();

        console.log("teste");
        
    });
});






const booking_button = document.getElementById("book-now-button");

booking_button.addEventListener('click', () => {
    main.scrollTo({top: hero.offsetHeight, behavior:'smooth' })

    console.log("Test");
})



const hotel_offers_images = document.querySelectorAll("div#offers-hotel-images")


for (let i = 0; i < hotel_offers_images.length; i++) {
    hotel_offers_images[i]
}





function generateDetails() {
    const div = document.createElement("div");
    div.className = "details";
    div.addEventListener('click', () => {
        div.remove();
    });
    const details = document.createElement("div");

    details.className = "details-pop";
    details.innerHTML = `
            
        `;
    div.appendChild(details);



    main.appendChild(div);
}




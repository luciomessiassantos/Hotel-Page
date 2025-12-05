import getLocalJsonData from "./data-fetch.js";

const main = document.getElementById("main-page");
const hero = document.getElementById("hero");
const header = document.getElementById("header");
const allHotelsSearch = document.getElementById("all-hotels-page");
if (!header) {
    throw new Error("Header is null! There's no element with id 'header', create one!")
}

const section2 = document.getElementById("second-section");
if (!section2) {
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

    if (index > cards.length ) {
        index = 0;
    }
    commentsScroll(index);
    index++;

}, 3000)



const observer = new IntersectionObserver(
    (e) => {
        e.forEach((entry) => {
            if (entry.isIntersecting) {
                header.classList.add("bg-blue-700");
            } else {
                header.classList.remove("bg-blue-700");
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

for (let index = 0; index < images_offers.length; index++) {

    offers.innerHTML += `
                    <article class="min-w-1/3 h-5/6 m-6 bg-[url(${images_offers[index]})] bg-cover bg-center rounded-2xl snap-center relative 
                after:content-normal after:rounded-2xl after:absolute after:w-full after:h-full after:top-0 after:bg-gradient-to-t after:from-black/85 after:to-black/5 after:inset-0
                transition-all duration-300 after:transition-all after:duration-300 after:opacity-70  hover:after:opacity-100 
                    flex flex-col justify-between px-4 py-4">
                    <div class="w-full h-1/5 ">
                        <div class="bg-slate-600 w-1/5 h-5/6 text-lg font-semibold text-white rounded-full flex items-center justify-evenly">
                            ⭐ 
                            <h2>${data[index].rating.average}</h2>
                        </div>
                    </div>
                <div class=" flex justify-between items-center px-5 font-medium text-2xl text-slate-50 w-full z-1 ">
                    <h1>Hotel ${index + 1}</h1>
                    <button class="bg-blue-900 p-2 px-5 rounded-3xl text-lg">Visualizar</button>
                </div>
    `

}





const booking_button = document.getElementById("book-now-button");

booking_button.addEventListener('click', () => {
    main.scrollTo({top: hero.offsetHeight, behavior:'smooth' })
})

const hotel_offers_images = document.querySelectorAll("div#offers-hotel-images")


for (let i = 0; i < hotel_offers_images.length; i++) {
    hotel_offers_images[i]
}

/**
 * @param {number} id
 */

function onClickV(id) {
    console.log(id);
}


const initAllHotels = () => {
    
}




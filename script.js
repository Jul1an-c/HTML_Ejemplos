let movies = [
    {
        name: "falcon and the winter soldier",
        des: 
        "The Falcon and the Winter Soldier, set after 2019's Avengers: Endgame, is about two Marvel superheroes, namesakes Falcon (Anthony Mackie) and Winter Soldier (Sebastian Stan), as they team up on a globe-trotting thriller to take down an old enemy, Baron Zemo",
        image: "img/carru1.png"
    },
    {
        name: "loki",
        des: 
        "Loki was born a Frost Giant and abandoned as an infant by his father Laufey, only to be found by Odin during an invasion of the realm of the Frost Giants in Jotunheim. Odin used magic to make Loki appear Asgardian and raised him as a son alongside Odin's biological son, Thor.",
        image: "img/carru1.png"
    },
    {
        name: "wanda vision",
        des: 
        "It follows Wanda Maximoff and Vision as they live an idyllic suburban life in the town of Westview, New Jersey, until their reality starts moving through different decades of sitcom homages and television tropes. Schaeffer served as head writer for the series, which was directed by Matt Shakman.",
        image: "img/carru1.png"
    },
    {
        name: "raya and the last dragon",
        des: 
        "Kelly Marie Tran as Raya, the fierce and virtuous warrior princess of Heart who has been training to become a Guardian of the Dragon Gem. To change her father from stone back into himself and restore peace to Kumandra, she embarks on a search for the last dragon. Awkwafina as Sisu, the last dragon in existence",
        image: "https://i.postimg.cc/1XNzQhw0/slider-4.png"
    },
    {
        name: "luca",
        des: "A young boy experiences an unforgettable seaside summer on the Italian Riviera filled with gelato, pasta and endless scooter rides. Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply-held secret: he is a sea monster from another world just below the ocean's surface.",
        image: "https://i.postimg.cc/sg3Zpx5t/slider-5.png"
    }
]

const carousel = document.querySelector('.carousel')
let sliders = []

let slideIndex = 0;

const createSlide = () => {
    if(slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // creating DOM element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // attaching all element
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting elements classname
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    // adding sliding effect
    if(sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}

for(let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 5000);


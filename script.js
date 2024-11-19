const catalog = document.getElementById('a1');
const plazhka = document.getElementById('a2');
const crest = document.querySelector(".crest");
const body = document.querySelector(".temnota")

catalog.addEventListener('click', () => {
    plazhka.style.display = "block";
    body.style.display = "block"
});
crest.addEventListener('click', () => {
    plazhka.style.display = "none";
    body.style.display = "none"
});

const spisok = document.querySelector(".spisok");
const list = document.getElementById("list");
let scrollInterval; 
let scroll;

function autoscroll() {
    if (scroll) {
        clearInterval(scrollInterval);
    } 
    scrollInterval = setInterval(() => {
        spisok.scrollLeft += 157;
        if (spisok.scrollLeft >= spisok.scrollWidth - spisok.clientWidth) {
            spisok.scrollLeft = 0;
        }
    }, 1000);
}

autoscroll();

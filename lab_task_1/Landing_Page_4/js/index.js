
const initSlider=()=>{
    const slideBtns = document.querySelectorAll(".slider-wrappers .slide-btn");
    const imgList = document.querySelector(".slider-wrappers .img-list");

    slideBtns.forEach(button=>{
        button.addEventListener("click", ()=>{
            console.log("ok")
            const directon = button.id === "previous-slide" ? -1: 1;
            console.log(directon)
            const scrollAmnt = imgList.clientWidth * directon;
            console.log(scrollAmnt)
            imgList.scrollBy({left: scrollAmnt, behaviour: "smooth" })

        })
    })
}

window.addEventListener("load", initSlider);




// Get the range input element and span elements for displaying price values
const range = document.getElementById('price_range');
const priceFrom = document.getElementById('price_from');
const priceTo = document.getElementById('price_to');

// Display initial price values
priceFrom.textContent = range.min;
priceTo.textContent = range.value;

// Update displayed price as the range slider value changes
range.addEventListener('input', function() {
    priceTo.textContent = this.value;
});


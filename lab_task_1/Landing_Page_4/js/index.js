
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


const navbar = document.querySelector('.navbar');


window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('scrolled');
        console.log("here")
    } else {
        navbar.classList.remove('scrolled');
        console.log("hered")
    }
};




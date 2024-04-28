

const navbar = document.querySelector('.navbar');
const navoCntainer = document.querySelector('.nav-container');


window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('scrolled');
        navoCntainer.classList.add('scrolled-pad-less');
        console.log("here")
    } else {
        navbar.classList.remove('scrolled');
        navoCntainer.classList.remove('scrolled-pad-less');
        console.log("hered")
    }
};




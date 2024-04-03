let images = document.getElementsByTagName("img");
let task = document.getElementById("task");

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", function () {
        task.innerHTML = (images[i].src)
        console.log(images[i].src);
    });


    images[i].addEventListener("mouseout", function () {
        console.log("MouseOut");
    });
}

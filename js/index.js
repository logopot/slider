var images = ["img.jpg", "img1.jpg", "img2.jpg", "img3.jpg"];

var slider = document.createElement("div");
slider.setAttribute("class", "slider");
document.body.appendChild(slider);

var innerSlider = document.createElement("div");
innerSlider.setAttribute("class", "inner-slider");
slider.appendChild(innerSlider);

var thumbWrapp = document.createElement("div");
thumbWrapp.setAttribute("class", "thumb-wrapp");
document.body.appendChild(thumbWrapp);

function createImage(i) {

    var imgWrapp = document.createElement("div");
    imgWrapp.setAttribute("class", "img-wrapp");
    innerSlider.appendChild(imgWrapp);

    var image = document.createElement("img");
    image.setAttribute("src", "./img/" + images[i]);
    imgWrapp.appendChild(image);
    
}

function createThumbs(i) {

    var imgThumb = document.createElement("div");
    imgThumb.setAttribute("class", "img-thumb");
    thumbWrapp.appendChild(imgThumb);

    var imageThumb = document.createElement("img");
    imageThumb.setAttribute("src", "./img/" + images[i]);
    imgThumb.appendChild(imageThumb);
    
}

for (var i = 0; i < images.length; i++) {

    createImage(i);
    createThumbs(i);
   
}

var count = 0;
var j = 1;

var firstThumb = document.getElementsByClassName("img-thumb");
firstThumb[0].classList.add("active")

function slide() {

    count -= 1200;
    
    for (var i = 0; i < images.length; i++) {
        var sliderInner = innerSlider.children;
        sliderInner[i].style.transform = "translateX(" + count + "px)";
        sliderInner[i].style.transition = "all 2s";
        firstThumb[i].className = firstThumb[i].className.replace(" active", "");
        
    }

    firstThumb[j].className += " active";

    j++;

    if (j == images.length){
        count = 1200;
        j = 0;

    }
}

setInterval(slide, 4000);
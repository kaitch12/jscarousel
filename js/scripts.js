

window.onload = function () {
    document.getElementById("copyright").innerHTML = new Date().getFullYear();
}

// Slideshow function

let intIndex = 0;

// function showImage(i)
function showImage() {
    intIndex++;

    let theImages = document.getElementsByClassName("image");
    let theDots = document.getElementsByClassName("dot");

    for (n = 0; n < theImages.length; n++) {
        theImages[n].style.display = "none";
        theDots[n].className = theDots[n].className.replace(" active", "");
    }
    if (intIndex > theImages.length - 1) {
        intIndex = 0;
    }
    if (intIndex < 0) {
        intIndex = theImages.length - 1;
    }

    theImages[intIndex].style.display = "block";
    theDots[intIndex].className += " active";
}

setInterval(function() {
    showImage(); 
}, 5000);
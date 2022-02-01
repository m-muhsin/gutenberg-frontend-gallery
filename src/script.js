// To hold the index
var currentIndex, defaultCurrentIndex;

// The two container divs.
const galleryContainer = document.getElementsByClassName('gallery-container')[0];
const imageContainer = document.getElementsByClassName('gallery-image-container')[0];

// The images array as a parsed JavaScript object.
const imagesArray = Array.from(document.querySelectorAll('.gallery-image'));

// The two buttons
const buttonLeft = document.getElementsByClassName("btn-left")[0];
const buttonRight = document.getElementsByClassName("btn-right")[0];

// Left button click event
buttonLeft.addEventListener("click", function () {

    currentIndex = getCurrentIndex();

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = imagesArray.length - 1;
    }

    imagesArray[currentIndex].className = 'gallery-image active';
});

// Right button click event
buttonRight.addEventListener("click", function () {

    currentIndex = getCurrentIndex();

    currentIndex++;

    if (currentIndex > imagesArray.length - 1) {
        currentIndex = 0;
    }

    imagesArray[currentIndex].className = 'gallery-image active';
});

function getCurrentIndex() {

    let ctIdx;
    imagesArray.map((item, index) => {
        if (item.classList.contains('active')) {
            ctIdx = index;
        }
        item.className = 'gallery-image'
    })

    return ctIdx;

}

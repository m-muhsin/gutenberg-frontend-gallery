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
    imagesArray.map((item, index) => {
        if (item.classList.contains('active')) {
            currentIndex = index;
        }
        item.className = ''
    })

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = imagesArray.length - 1;
    }

    imagesArray[currentIndex].className = 'active';
});

// Right button click event
buttonRight.addEventListener("click", function () {

    console.log('right button clicked')

    imagesArray.map((item, index) => {
        if (item.classList.contains('active')) {
            currentIndex = index;
        }
        item.className = ''
    })

    currentIndex++;

    if (currentIndex > imagesArray.length - 1) {
        currentIndex = 0;
    }

    imagesArray[currentIndex].className = 'active';
});

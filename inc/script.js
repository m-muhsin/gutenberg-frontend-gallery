// To hold the index
var currentIndex, defaultCurrentIndex;

// The two container divs.
const galleryContainer = document.getElementsByClassName('gallery-container')[0];
const imageContainer = document.getElementsByClassName('gallery-image-container')[0];

// The element that contains the whole gallery, selected by ID.
const imagesContainer = document.getElementById("imagesContainer");

// The images array as a parsed JavaScript object.
const imagesArray = JSON.parse(imagesContainer.getAttribute('data-images'));

// Array of image objects
const arrayofImgs = imagesArray.map((image, index) => {
    var img1 = new Image();
    img1.src = image.url;
    img1.alt = image.alt;

    console.log('index',index)

    if (index === 0) {
        img1.className = "active"
    } else {
        img1.className = ""
    }

    // The element that contains just the images.
    let container = document.querySelector('.gallery-image-container')
    container.appendChild(img1);
});

// The two buttons
const buttonLeft = document.getElementsByClassName("btn-left")[0];
const buttonRight = document.getElementsByClassName("btn-right")[0];

// Left button click event
buttonLeft.addEventListener("click", function () {
    const images = Array.from(imageContainer.children);

    images.map((item, index) => {
        if (item.classList.contains('active')) {
            currentIndex = index;
        }
        item.className = ''
    })

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = arrayofImgs.length - 1;
    }

    images[currentIndex].className = 'active';
});

// Right button click event
buttonRight.addEventListener("click", function () {

    console.log('right button clicked')

    const images = Array.from(imageContainer.children);

    images.map((item, index) => {
        if (item.classList.contains('active')) {
            currentIndex = index;
        }
        item.className = ''
    })

    currentIndex++;

    if (currentIndex > arrayofImgs.length - 1) {
        currentIndex = 0;
    }

    images[currentIndex].className = 'active';
});



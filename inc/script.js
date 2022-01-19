var currentIndex, defaultCurrentIndex;

const galleryContainer = document.getElementsByClassName('gallery-container')[0];
const imageContainer = document.getElementsByClassName('gallery-image-container')[0];

const buttonLeft = document.getElementsByClassName("btn-left")[0];
const buttonRight = document.getElementsByClassName("btn-right")[0];

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
        currentIndex = 2;
    }

    images[currentIndex].className = 'active';
});

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

    if (currentIndex > 2) {
        currentIndex = 0;
    }

    images[currentIndex].className = 'active';
});

// The element that contains the whole gallery, selected by ID.
const imagesContainer = document.getElementById("imagesContainer");

// The images array as a parsed JavaScript object.
const imagesArray = JSON.parse(imagesContainer.getAttribute('data-images'));

const arrayofImgs = imagesArray.map(image => {
    var img1 = new Image();
    img1.src = image.url;
    img1.alt = image.alt;
    img1.className = "active";

    // The element that contains just the images.
    let container = document.querySelector('.gallery-image-container')
    container.appendChild(img1);
})

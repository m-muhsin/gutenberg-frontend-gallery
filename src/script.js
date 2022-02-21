function Slider(slider) {

    if (!(slider instanceof Element)) {
        throw new Error('No slider passed in.');
    }

    // Create some variables for working with the slider.
    let current;
    let prev;
    let next;

    // Select the elements needed for the slider.
    const slides = slider.querySelector('.slides');

    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');

    function startSlider() {

        current = slider.querySelector('.current') || slides.firstElementChild;
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;

    }

    function applyClasses() {

        current.classList.add('current');
        prev.classList.add('prev');
        next.classList.add('next');


    }

    function move(direction) {
        // First strip all the classes off the current slides.
        const classesToRemove = ['prev', 'current', 'next'];
        prev.classList.remove(...classesToRemove);
        current.classList.remove(...classesToRemove);
        next.classList.remove(...classesToRemove);

        if (direction === 'back') {
            // Make a new array of the new values, and destructure them over and 
            // into the prev, current, and next variables.
            [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current];
        } else {
            [prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild];
        }

        applyClasses();
    }

    // When this Slider is created, run the startSlider function (the constructor).
    startSlider();
    applyClasses();

    // Event listeners
    prevButton.addEventListener('click', () => move('back'));
    nextButton.addEventListener('click', move);
}

const allSliders = Array.from(document.querySelectorAll('.slides-container'));
allSliders.forEach(slider => new Slider(slider));

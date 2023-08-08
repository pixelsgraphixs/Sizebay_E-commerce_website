// ---------------
// MODAL
// ---------------
'use strict';

// modal variables
const modal = document.querySelector('[data-modal-subs]');
const modalCloseBtn = document.querySelector('[data-modal-close-subs]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay-subs]');

// modal function
const modalCloseFunc = function() { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);

// ---------------
// COLLECTION SLIDER SECTION
// ---------------

const carousel = document.querySelector(".products-slider"),
    firstImg = carousel.querySelectorAll("img")[0],
    arrowIcons = document.querySelectorAll(".collection-products .icon");

let isDragStart = false,
    isDragging = false,
    prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);


// ---------------
// FEATURED PRODUCT SECTION
// ---------------

$(document).ready(function() {

    var s_round = '.s_round';

    $(s_round).hover(function() {
        $('.b_round').toggleClass('b_round_hover');
        return false;
    });

    $(s_round).click(function() {
        $('.flip_box').toggleClass('flipped');
        $(this).addClass('s_round_click');
        $('.s_arrow').toggleClass('s_arrow_rotate');
        $('.b_round').toggleClass('b_round_back_hover');
        return false;
    });

    $(s_round).on('transitionend', function() {
        $(this).removeClass('s_round_click');
        $(this).addClass('s_round_back');
        return false;
    });
});
$(document).ready(function() {

    var s_round1 = '.s_round1';

    $(s_round1).hover(function() {
        $('.b_round1').toggleClass('b_round_hover1');
        return false;
    });

    $(s_round1).click(function() {
        $('.flip_box1').toggleClass('flipped1');
        $(this).addClass('s_round_click1');
        $('.s_arrow1').toggleClass('s_arrow_rotate1');
        $('.b_round1').toggleClass('b_round_back_hover1');
        return false;
    });

    $(s_round1).on('transitionend', function() {
        $(this).removeClass('s_round_click1');
        $(this).addClass('s_round_back1');
        return false;
    });
});

$(document).ready(function() {

    var s_round2 = '.s_round2';

    $(s_round2).hover(function() {
        $('.b_round2').toggleClass('b_round_hover2');
        return false;
    });

    $(s_round2).click(function() {
        $('.flip_box2').toggleClass('flipped2');
        $(this).addClass('s_round_click2');
        $('.s_arrow2').toggleClass('s_arrow_rotate2');
        $('.b_round2').toggleClass('b_round_back_hover2');
        return false;
    });

    $(s_round2).on('transitionend', function() {
        $(this).removeClass('s_round_click2');
        $(this).addClass('s_round_back2');
        return false;
    });
});

$(document).ready(function() {

    var s_round3 = '.s_round3';

    $(s_round3).hover(function() {
        $('.b_round3').toggleClass('b_round_hover3');
        return false;
    });

    $(s_round3).click(function() {
        $('.flip_box3').toggleClass('flipped3');
        $(this).addClass('s_round_click3');
        $('.s_arrow3').toggleClass('s_arrow_rotate3');
        $('.b_round3').toggleClass('b_round_back_hover3');
        return false;
    });

    $(s_round3).on('transitionend', function() {
        $(this).removeClass('s_round_click3');
        $(this).addClass('s_round_back3');
        return false;
    });
});

// ---------------
// TESTIMONIAL SECTION
// ---------------

const sliderElm = document.querySelector(".slider-container .slider");
const btnLeft = document.querySelector(".slider-container .btn-left");
const btnRight = document.querySelector(".slider-container .btn-right");

const numberSliderBoxs = sliderElm.children.length;
let idxCurrentSlide = 0;

// Functions:
function moveSlider() {
    let leftMargin = (sliderElm.clientWidth / numberSliderBoxs) * idxCurrentSlide;
    sliderElm.style.marginLeft = -leftMargin + "px";
    console.log(sliderElm.clientWidth, leftMargin);
}

function moveLeft() {
    if (idxCurrentSlide === 0) idxCurrentSlide = numberSliderBoxs - 1;
    else idxCurrentSlide--;

    moveSlider();
}

function moveRight() {
    if (idxCurrentSlide === numberSliderBoxs - 1) idxCurrentSlide = 0;
    else idxCurrentSlide++;

    moveSlider();
}

// Event Listeners:
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
window.addEventListener("resize", moveSlider);

// ---------------
// FAQ SECTION
// ---------------
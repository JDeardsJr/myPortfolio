'use strict';

// this function toggles the active class on the js-slider-menu
function toggleSliderMenu() {
    $('.js-slider-menu').toggleClass('active');
}

// this function checks to see if the slider menu is active and, if so, closes it
function reasoningHomeClick() {
    if ($('.js-slider-menu').hasClass('active')) {
        toggleSliderMenu();
    }
}

// this function listens for user to click on the home logo 
// runs a function to determine if it should close the slider menu 
function handleHomeClick() {
    $('nav').on('click', '.name', function(event) {
        console.log('`handleHomeClick` ran');
        reasoningHomeClick();
    });
    console.log('`handleHomeClick` ran');
}

// this function listens for user to click on hamburger menu and calls the toggleSliderMenu function
function handleSliderMenu() {
    $('nav').on('click', '.js-hamburger', function(event) {
        console.log('`handleSliderMenu` ran');
        toggleSliderMenu();
    });
    console.log('`handleSliderMenu` ran');
}

// this function listens for user to click on a menu item and calls the toggleSliderMenu function
function handleSliderExit() {
    $('.js-slider-menu').on('click', '.jumper', function(event) {
        console.log('`handleSliderExit` ran');
        toggleSliderMenu();
    });
    console.log('`handleSliderExit` ran');
}

function handleHamburgerMenu() {
    handleSliderMenu();
    handleSliderExit();
    handleHomeClick();
}

$(handleHamburgerMenu);

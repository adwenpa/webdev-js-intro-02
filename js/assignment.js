"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution")
const willMeetResolutionElement = document.getElementById("will-meet-resolution")
const submissionBtn = document.getElementById("submission-btn")

// Declare your variables here.
const resolution = "Be thankful";
const currentYear = 2024;
let willMeetResolution = true;

function updateYear() {
    // Update this function
    yearElement.innerText = currentYear + 1;

}

function updateResolution() {
    // Update this function 
    resolutionElement.innerText = resolution;

}

function updateWillMeetResolution() {
    // Update this function
    willMeetResolutionElement.innerText = willMeetResolution;

}

function render() {
    // Update this function
    updateYear();
    updateResolution();
    updateWillMeetResolution();


}

submissionBtn.addEventListener("click", function () {
    // Update this function
    render();

})

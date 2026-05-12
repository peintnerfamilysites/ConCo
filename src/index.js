// src/index.js
import "./styles.css";
import "animate.css";
import homeCreation from "./pages/Home/homeCreation.js";

// Get the content element from the DOM to render the home page on it.
const content = document.getElementById("content");
// This function will check the screen size and render the appropriate version of the home page.
function checkScreenSize() {
  // Get the screen width and height.
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  // Check if the screen width is less than or equal to 768 pixels, which is the breakpoint for mobile devices.
  if (screenWidth <= 768) {
    // If the screen width is less than or equal to 768 pixels, render the mobile version of the home page.
    content.innerHTML = "";
    const screenSizeInfo = "mobile"
    content.appendChild(homeCreation(screenSizeInfo));
  } else {
    // If the screen width is greater than 768 pixels, render the desktop version of the home page.
    content.innerHTML = "";
    const screenSizeInfo = "desktop";
    content.appendChild(homeCreation(screenSizeInfo));
  }
}   
// Call the checkScreenSize function to render the appropriate version of the home page on initial load.
checkScreenSize();
// Add an event listener to the window to check the screen size and render the appropriate version of the home page when the window is resized.
window.addEventListener("resize", checkScreenSize);     
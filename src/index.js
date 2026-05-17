// src/index.js
import "./styles.css";
import "animate.css";
import checkScreenSize from "./utils/checkScreenSize.js";
import homeCreation from "./pages/Home/homeCreation.js";    
// Get the content element from the DOM to render the home page on it.
const content = document.getElementById("content");
const screenSizeInfo = checkScreenSize();
// Render the home page based on the screen size when the page is loaded.
content.appendChild(homeCreation(screenSizeInfo));
// Add an event listener to the window to check the screen size and render the home page when the window is resized.
window.addEventListener("resize", () => {
  const newScreenSizeInfo = checkScreenSize();
  content.appendChild(homeCreation(newScreenSizeInfo));
});   
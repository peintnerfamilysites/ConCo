// src/index.js
import "./styles.css";
import "animate.css";
import checkScreenSize from "./utils/checkScreenSize.js";
import homeCreation from "./pages/Home/homeCreation.js";
// Get the content element from the DOM to render the home page on it.
const content = document.getElementById("content");
const screenSizeInfo = checkScreenSize();
// check screen size and render the home page on the content element.
if (screenSizeInfo === "mobile") {
  content.appendChild(homeCreation(screenSizeInfo));
} else {
  content.appendChild(homeCreation(screenSizeInfo));
}
// Add an event listener to the window to check the screen size and render the home page when the window is resized.
window.addEventListener("resize", () => {
  const newScreenSizeInfo = checkScreenSize();
  content.appendChild(homeCreation(newScreenSizeInfo));
});

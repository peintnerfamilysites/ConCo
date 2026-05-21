// Import the functions to create the header, body, and footer for the home page.
import createHomeBody from "./homeBody.js";
import createNavBar from "../NavBar/createNavBar.js";

// This will create the home page and return the html element to be rendered on the page.
export default function homeCreation(screenSize) {
  // Check for a current home page and remove it if it exists before creating a new one.
  const currentHomePage = document.querySelector(".home-container");
  if (currentHomePage) {
    currentHomePage.remove();
  }
  // Call a Navbar creator function to create the header for the home page.
  const navBar = createNavBar(screenSize);
  // Call the home body creation function to create the body for the home page.
  const homeBody = createHomeBody();
  // Create a container for the home page and append the header, body, and footer to it.
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");
  homeContainer.appendChild(navBar);
  homeContainer.appendChild(homeBody);
  // Return the home container to be rendered on the page.
  return homeContainer;
}
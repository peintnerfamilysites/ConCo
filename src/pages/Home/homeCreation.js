// Import the functions to create the header, body, and footer for the home page.
import createHomeHeader from "./homeHeader.js";
import createHomeBody from "./homeBody.js";
import createHomeFooter from "./homeFooter.js";

// This will create the home page and return the html element to be rendered on the page.
export default function homeCreation(screenSize) {
  // Call the home header creation function to create the header for the home page.
  const homeHeader = createHomeHeader();
  // Call the home body creation function to create the body for the home page.
  const homeBody = createHomeBody();
  // Call the home footer creation function to create the footer for the home page.
  const homeFooter = createHomeFooter();
  // Create a container for the home page and append the header, body, and footer to it.
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");
  homeContainer.appendChild(homeHeader);
  homeContainer.appendChild(homeBody);
  homeContainer.appendChild(homeFooter);
  // Return the home container to be rendered on the page.
  return homeContainer;
}
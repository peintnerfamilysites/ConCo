import Logo from "../../assets/NewLogo.png";
import modalOpen from "../../utils/modalOpen.js";

// This function will create the navbar and return the html element to be rendered on the page.
export default function createNavBar(screenSize) {
  // Create a container for the navbar and add the appropriate class to it.
  const navBarContainer = document.createElement("div");
  navBarContainer.classList.add("nav-bar-container");
  // Check if the screen size is mobile or desktop and create the appropriate navbar.
  if (screenSize === "mobile") {
    // If the screen size is mobile, create a mobile navbar.
    const navBarLogo = document.createElement("img");
    navBarLogo.classList.add("nav-bar-logo","animate__animated", "animate__heartBeat","animate__slow");
    navBarLogo.src = Logo;
    navBarLogo.alt = "Barneys Supply Company Logo";
    navBarLogo.addEventListener("click", () => {
      // When the logo is clicked create and open the navigation menu
      modalOpen("mobile-nav-menu");
    });
    navBarContainer.appendChild(navBarLogo);
  } else {
    // If the screen size is desktop, create a desktop navbar.
    
  }
  // Return the navbar container to be rendered on the page.              
  return navBarContainer;
}
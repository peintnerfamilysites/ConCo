import Logo from "../../assets/Logo.png";

// This function will create the navbar and return the html element to be rendered on the page.
export default function createNavBar(screenSize) {
  // Create a container for the navbar and add the appropriate class to it.
  const navBarContainer = document.createElement("div");
  navBarContainer.classList.add("nav-bar-container");
  // Check if the screen size is mobile or desktop and create the appropriate navbar.
  if (screenSize === "mobile") {
    // If the screen size is mobile, create a mobile navbar.
    const navBarLogo = document.createElement("img");
    navBarLogo.classList.add("nav-bar-logo");
    navBarLogo.src = Logo;
    navBarLogo.alt = "ConCo Logo";
    navBarContainer.appendChild(navBarLogo);
  } else {
    // If the screen size is desktop, create a desktop navbar.
    const navBarHeading = document.createElement("h1");
    navBarHeading.classList.add("nav-bar-heading");
    navBarHeading.textContent = "ConCo";
    const navBarLinksContainer = document.createElement("div");
    navBarLinksContainer.classList.add("nav-bar-links-container");
    const homeLink = document.createElement("a");
    homeLink.classList.add("nav-bar-link");
    homeLink.textContent = "Home";
    const aboutLink = document.createElement("a");
    aboutLink.classList.add("nav-bar-link");
    aboutLink.textContent = "About";
    const contactLink = document.createElement("a");
    contactLink.classList.add("nav-bar-link");
    contactLink.textContent = "Contact";
    navBarLinksContainer.appendChild(homeLink);
    navBarLinksContainer.appendChild(aboutLink);
    navBarLinksContainer.appendChild(contactLink);
    navBarContainer.appendChild(navBarHeading);
    navBarContainer.appendChild(navBarLinksContainer);
  }
  // Return the navbar container to be rendered on the page. 
  console.log(navBarContainer);               
  return navBarContainer;
}
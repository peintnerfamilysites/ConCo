// Imports
import checkScreenSize from "../../utils/checkScreenSize.js";
import homeCreation from "../Home/homeCreation.js";
import aboutUsCreation from "../AboutUs/aboutUsCreation.js";
import servicesCreation from "../Services/servicesCreation.js";
import contactUsCreation from "../ContactUs/contactUsCreation.js";
import insuranceCreation from "../Insurance/insuranceCreation.js";
import LogoClose from "../../assets/NewLogo.png";
import MainLogo from "../../assets/MainSitesLogo.png";

// Create the mobile navigation menu modal and return the html element to be rendered on the page.
export default function createNavModal(id) {
  // Create a container for the mobile navigation menu and add the appropriate class to it.
  const navModalContainer = document.createElement("div");
  navModalContainer.classList.add(
    "nav-modal-container",
    "animate__animated",
    "animate__fadeInDown",
  );
  navModalContainer.id = id;
  // create an event listener for the container so if its clicked while open it closes the modal with an animation and then removes the modal from the DOM.
  navModalContainer.addEventListener("click", e => {
    if (e.target.classList.contains("nav-links-container")) {
      navModalContainer.classList.remove(
        "animate__fadeInDown",
        "animate__animated",
      );
      navModalContainer.classList.add(
        "animate__fadeOutUp",
        "animate__animated",
      );
      setTimeout(() => {
        navModalContainer.remove();
      }, 1000); // Wait for the animation to finish before removing the modal from the DOM.
    }
  });
  // Creat an img element for the close button and add the appropriate class to it.
  const closeButton = document.createElement("img");
  closeButton.classList.add(
    "nav-modal-close-button",
    "animate__animated",
    "animate__pulse",
    "animate__infinite",
  );
  closeButton.src = LogoClose;
  closeButton.alt = "Close Button";
  closeButton.addEventListener("click", () => {
    // When the close button is clicked close modal with an animation and then remove the modal from the DOM.
    navModalContainer.classList.remove(
      "animate__fadeInDown",
      "animate__animated",
    );
    navModalContainer.classList.add("animate__fadeOutUp", "animate__animated");
    setTimeout(() => {
      navModalContainer.remove();
    }, 1000); // Wait for the animation to finish before removing the modal from the DOM.
  });
  // create an img element for the main logo and add the appropriate class to it.
  const mainLogo = document.createElement("img");
  mainLogo.classList.add(
    "nav-modal-main-logo",
    "animate__animated",
    "animate__fadeInDown",
  );
  mainLogo.src = MainLogo;
  mainLogo.alt = "Main Logo";
  // Add an event listener to the main logo so when its clicked it closes the modal with an animation and then removes the modal from the DOM.
  mainLogo.addEventListener("click", () => {
    navModalContainer.classList.remove(
      "animate__fadeInDown",
      "animate__animated",
    );
    navModalContainer.classList.add("animate__fadeOutUp", "animate__animated");
    setTimeout(() => {
      navModalContainer.remove();
    }, 1000); // Wait for the animation to finish before removing the modal from the DOM.
    const content = document.getElementById("content");
    const screenSizeInfo = checkScreenSize();

    content.innerHTML = "";
    content.appendChild(homeCreation(screenSizeInfo));
  });
  // Create a container for the navigation links and add the appropriate class to it.
  const navLinksContainer = document.createElement("div");
  navLinksContainer.classList.add("nav-links-container");
  // Create the navigation links and add them to the navigation links container.
  const navLinks = [
    "Home",
    "About Us",
    "Services",
    "Contact Us",
    "Insurance Help?",
  ];
  navLinks.forEach(link => {
    const navLink = document.createElement("div");
    const content = document.getElementById("content");
    const screenSizeInfo = checkScreenSize();
    navLink.classList.add(
      "nav-link",
      "animate__animated",
      "animate__fadeInDown",
    );
    navLink.id = `${link.toLowerCase().replace(/\s/g, "-")}`;
    navLink.textContent = link;
    // Add an event listener to each navigation link to close the modal when clicked.
    navLink.addEventListener("click", () => {
      // Close the modal with an animation and then remove the modal from the DOM.
      navModalContainer.classList.remove(
        "animate__fadeInDown",
        "animate__animated",
      );
      navModalContainer.classList.add(
        "animate__fadeOutUp",
        "animate__animated",
      );
      setTimeout(() => {
        navModalContainer.remove();
      }, 1000); // Wait for the animation to finish before removing the modal from the DOM.
      content.innerHTML = "";
      // Check which link is clicked and do an action based on the link text.
      switch (link) {
        case "Home":
          // Call the Home function to render the home page when the "Home" link is clicked.
          content.appendChild(homeCreation(screenSizeInfo));
          console.log("Home link clicked");
          break;
        case "About Us":
          // Call the About Us function to render the about us page when the "About Us" link is clicked.
          content.appendChild(aboutUsCreation(screenSizeInfo));
          console.log("About Us link clicked");
          break;
        case "Services":
          // Call the Services function to render the services page when the "Services" link is clicked.
          content.appendChild(servicesCreation(screenSizeInfo));
          console.log("Services link clicked");
          break;
        case "Contact Us":
          // Call the Contact Us function to render the contact us page when the "Contact Us" link is clicked.
          content.appendChild(contactUsCreation(screenSizeInfo));
          console.log("Contact Us link clicked");
          break;
        case "Insurance Help?":
          // Call the Insurance Help function to render the insurance help page when the "Insurance Help?" link is clicked.
          content.appendChild(insuranceCreation(screenSizeInfo));
          console.log("Insurance Help? link clicked");
          break;
        default:
          break;
      }
    });
    navLinksContainer.appendChild(navLink);
  });
  // Append the close button to the modal container.
  navModalContainer.appendChild(closeButton);
  // Append the main logo to the modal container.
  navModalContainer.appendChild(mainLogo);
  // Append the navigation links container to the modal container.
  navModalContainer.appendChild(navLinksContainer);
  // Return the modal container to be rendered on the page.
  return navModalContainer;
}

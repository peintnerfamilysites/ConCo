// Imports 
import checkScreenSize from "../../utils/checkScreenSize.js";
import homeCreation from "../Home/homeCreation.js";
import aboutUsCreation from "../AboutUs/aboutUsCreation.js";

// Create the mobile navigation menu modal and return the html element to be rendered on the page.
export default function createNavModal(id) {
  // Create a container for the mobile navigation menu and add the appropriate class to it.
  const navModalContainer = document.createElement("div");
  navModalContainer.classList.add("nav-modal-container");
  navModalContainer.id = id;
  // Creat an img element for the close button and add the appropriate class to it.
  const closeButton = document.createElement("img");
  closeButton.classList.add("nav-modal-close-button","animate__animated", "animate__pulse", "animate__infinite");
  closeButton.src = "https://img.icons8.com/ios-glyphs/30/000000/macos-close.png";
  closeButton.alt = "Close Button";
  closeButton.addEventListener("click", () => {
    // When the close button is clicked close modal
    navModalContainer.remove();
    
  });
  // Create a container for the navigation links and add the appropriate class to it.
  const navLinksContainer = document.createElement("div");
  navLinksContainer.classList.add("nav-links-container");
  // Create the navigation links and add them to the navigation links container.
  const navLinks = ["Home", "About Us", "Services", "Contact Us", "Insurance Help?"];
  navLinks.forEach(link => {
    const navLink = document.createElement("div");
    const content = document.getElementById("content");
    const screenSizeInfo = checkScreenSize();
    navLink.classList.add("nav-link");
    navLink.id = `${link.toLowerCase().replace(/\s/g, "-")}`;
    navLink.textContent = link;
    // Add an event listener to each navigation link to close the modal when clicked.
    navLink.addEventListener("click", () => {
      navModalContainer.remove(); 
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
          // Scroll to the "Services" section of the page when the "Services" link is clicked.
          document.getElementById("services").scrollIntoView({ behavior: "smooth" });
          break;
        case "Contact Us":
          // Scroll to the "Contact Us" section of the page when the "Contact Us" link is clicked.
          document.getElementById("contact-us").scrollIntoView({ behavior: "smooth" });
          break;
        case "Insurance Help?":
          // Scroll to the "Insurance Help?" section of the page when the "Insurance Help?" link is clicked.
          document.getElementById("insurance-help").scrollIntoView({ behavior: "smooth" });
          break;
        default:
          break;
      };     
    }); 
    navLinksContainer.appendChild(navLink);
  });
  // Append the close button to the modal container.
  navModalContainer.appendChild(closeButton);
  // Append the navigation links container to the modal container.
  navModalContainer.appendChild(navLinksContainer); 
  // Return the modal container to be rendered on the page.              
  return navModalContainer;
}
import HomeMainLogo from "../../assets/MainSitesLogo.png";
import checkScreenSize from "../../utils/checkScreenSize.js";
import screenSizeInfo from "../../utils/checkScreenSize.js";
import contactUsCreation from "../ContactUs/contactUsCreation.js";

// Export the home body creation function to be used in the home page creation function.
export default function createHomeBody() {
  const content = document.getElementById("content");
  // Create a container for the home body and add the appropriate class to it.
  const homeBodyContainer = document.createElement("div");
  homeBodyContainer.classList.add("home-body-container");
  // Create an image element for the Main Site Logo and set its source to the appropriate image file.
  const mainSiteLogo = document.createElement("img");
  mainSiteLogo.src = HomeMainLogo;
  mainSiteLogo.classList.add("home-body-main-logo","animate__animated","animate__fadeIn");
  // Add an event listener to the Main Site Logo that redirects the user to the contact page when clicked.
  mainSiteLogo.addEventListener("click", () => {
    content.innerHTML = ""; // Clear the content of the home page.
    content.appendChild(contactUsCreation(checkScreenSize()));
  });
  // Create an anchor element for the phone number and set its href attribute to the appropriate phone number.
  const PhoneNumber = document.createElement("a");
  PhoneNumber.href = "tel:903-417-7043";
  PhoneNumber.textContent = "Call Us: 903-417-7043";
  PhoneNumber.classList.add("home-body-phone-number","animate__animated","animate__fadeIn");
  // Create a paragraph element to list the purpose of the website and add the appropriate class to it.
  const websitePurpose = document.createElement("p");
  websitePurpose.classList.add("home-body-website-purpose","animate__animated","animate__fadeIn");
  websitePurpose.textContent = " It's SpringTime in the Ozarks! Everything turning green including your seeds and gutters? Check out our gutter options now! Considering a new roof? Maybe need some repairs on some siding? Leaks? Not a problem call us for Free no obligation estimates and proposals!"
  // Create a container to hold some images that can be clicked and scrolled through to show the different services that the company offers. Add the appropriate class to the container.  
  const jobContainer = document.createElement("div");
  jobContainer.classList.add("home-body-job-container");
  // Create an image element for each service that the company offers and set its source to the appropriate image file. Add the appropriate class to each image element.
  // TBD

  // Append the Main Site Logo to the home body container.
  homeBodyContainer.appendChild(mainSiteLogo);
  homeBodyContainer.appendChild(websitePurpose);
  homeBodyContainer.appendChild(PhoneNumber);
  homeBodyContainer.appendChild(jobContainer);
  // Return the home body container to be appended to the home page container.
  return homeBodyContainer;
}
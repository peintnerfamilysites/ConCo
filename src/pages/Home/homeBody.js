import HomeMainLogo from "../../assets/contactUs.png";
import SpringTimeInTheOzarks from "../../assets/Springtime.png";
import phoneNumber from "../../assets/CallUs.png"
import RoofGutter from "../../assets/RoofGutter.png";
import GarageDoors from "../../assets/SomeServices.png";
import ShingleRoofing from "../../assets/ShingleRoofing.png";
import VinylSiding from "../../assets/VinylSiding.png";
import checkScreenSize from "../../utils/checkScreenSize.js";
import screenSizeInfo from "../../utils/checkScreenSize.js";
import contactUsCreation from "../ContactUs/contactUsCreation.js";

// Export the home body creation function to be used in the home page creation function.
export default function createHomeBody(screenSize) {
  // Check the screen size and adjust the home body content accordingly.
  if (screenSizeInfo() === "mobile") {
    // If the screen size is mobile, create a different home body content that is optimized for mobile devices.
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
    PhoneNumber.classList.add("home-body-phone-number","animate__animated","animate__fadeIn");
    // Create an img element for the phone number and set its source to the appropriate image file. Add the appropriate class to the image element.
    const phoneNumberImage = document.createElement("img");
    phoneNumberImage.src = phoneNumber;
    phoneNumberImage.classList.add("home-body-phone-number-image");
    // Append the phone number image to the anchor element.
    PhoneNumber.appendChild(phoneNumberImage);
    // Create an image element for the websites springtime offerings and set its source to the appropriate image file. Add the appropriate class to the image element.
    const websitePurpose = document.createElement("img");
    websitePurpose.src = SpringTimeInTheOzarks;
    websitePurpose.classList.add("home-body-website-purpose","animate__animated","animate__fadeIn");   
    // Create an img element for the roofing and gutter showcase and set its source to the appropriate image file. Add the appropriate class to the image element.
    const roofingAndGutterShowcase = document.createElement("img");
    roofingAndGutterShowcase.src = RoofGutter;
    roofingAndGutterShowcase.classList.add("home-body-roofing-and-gutter-showcase","animate__animated","animate__fadeIn");
    // Create an img element for the garage door showcase and set its source to the appropriate image file. Add the appropriate class to the image element.
    const garageDoorShowcase = document.createElement("img");
    garageDoorShowcase.src = GarageDoors;
    garageDoorShowcase.classList.add("home-body-garage-door-showcase","animate__animated","animate__fadeIn");
    // Create a container to hold some images that can be clicked and scrolled through to show the different services that the company offers. Add the appropriate class to the container.  
    const jobContainer = document.createElement("div");
    jobContainer.classList.add("home-body-job-container");
    // Create an image element for each service that the company offers and set its source to the appropriate image file. Add the appropriate class to each image element.
    const shingleRoofing = document.createElement("img");
    shingleRoofing.src = ShingleRoofing;
    shingleRoofing.classList.add("home-body-job-image","animate__animated","animate__fadeIn");
    const vinylSiding = document.createElement("img");
    vinylSiding.src = VinylSiding;
    vinylSiding.classList.add("home-body-job-image","animate__animated","animate__fadeIn");
    // Append each service image to the job container.
    jobContainer.appendChild(shingleRoofing);
    jobContainer.appendChild(vinylSiding);    

    // Append the Main Site Logo to the home body container.
    homeBodyContainer.appendChild(mainSiteLogo);
    homeBodyContainer.appendChild(websitePurpose);
    homeBodyContainer.appendChild(roofingAndGutterShowcase);
    homeBodyContainer.appendChild(garageDoorShowcase);
    homeBodyContainer.appendChild(jobContainer);
    homeBodyContainer.appendChild(PhoneNumber);
    // Return the home body container to be appended to the home page container.
    return homeBodyContainer;
  } else {
    // If the screen size is not mobile, create the standard home body content.
    
  }
}
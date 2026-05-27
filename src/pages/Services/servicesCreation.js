// Imports
import createNavBar from "../NavBar/createNavBar.js";
import createServicesBody from "./createServicesBody.js";

export default function servicesCreation(screenSize) {
  // Check if the services page already exists and if it does remove it before creating a new one.
  const existingServicesPage = document.querySelector(".services-page");
  if (existingServicesPage) {
    existingServicesPage.remove();
  }
  // Create a container for the services page and add the appropriate class to it.
  const servicesPage = document.createElement("div");
  servicesPage.classList.add("services-page");
  // Create the navbar for the services page and append it to the services page.
  const navBar = createNavBar(screenSize);
  servicesPage.appendChild(navBar);
  // Create the body for the services page and append it to the services page.
  const servicesBody = createServicesBody();
  servicesPage.appendChild(servicesBody);
  //return the services page to be rendered on the page.
  return servicesPage;
}

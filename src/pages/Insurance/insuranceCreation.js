// Imports
import createNavBar from "../NavBar/createNavBar.js";
import createInsuranceBody from "./createInsuranceBody.js";

export default function insuranceCreation(screenSize) {
  // Check if the insurance page already exists and if it does remove it before creating a new one.
  const existingInsurancePage = document.querySelector(".insurance-page");
  if (existingInsurancePage) {
    existingInsurancePage.remove();
  }
  // Create a container for the insurance page and add the appropriate class to it.
  const insurancePage = document.createElement("div");
  insurancePage.classList.add("insurance-page");
  // Create the navbar for the insurance page and append it to the insurance page.
  const navBar = createNavBar(screenSize);
  insurancePage.appendChild(navBar);
  // Create the body for the insurance page and append it to the insurance page.
  const insuranceBody = createInsuranceBody();
  insurancePage.appendChild(insuranceBody);
  //return the insurance page to be rendered on the page.
  return insurancePage;
}

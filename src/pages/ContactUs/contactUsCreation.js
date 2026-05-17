import createNavBar from "../NavBar/createNavBar.js";
import createContactUsBody from "./createContactUsBody.js";

export default function contactUsCreation(screenSize) {
    // Check if the contact us page already exists and if it does remove it before creating a new one.
    const existingContactUsPage = document.querySelector(".contact-us-page");
    if (existingContactUsPage) {
        existingContactUsPage.remove();
    }
    // Create a container for the contact us page and add the appropriate class to it.
    const contactUsPage = document.createElement("div");
    contactUsPage.classList.add("contact-us-page");
    // Create the navbar for the contact us page and append it to the contact us page.
    const navBar = createNavBar(screenSize);
    contactUsPage.appendChild(navBar);
    // Create the body for the contact us page and append it to the contact us page.
    const contactUsBody = createContactUsBody();
    contactUsPage.appendChild(contactUsBody);   
    //return the contact us page to be rendered on the page.
    return contactUsPage;
}
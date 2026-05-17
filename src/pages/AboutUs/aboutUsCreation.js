import createNavBar from "../NavBar/createNavBar.js";
import createAboutUsBody from "./createAboutUsBody.js";

export default function aboutUsCreation(screenSize) {
    // Check if the about us page already exists and if it does remove it before creating a new one.
    const existingAboutUsPage = document.querySelector(".about-us-page");
    if (existingAboutUsPage) {
        existingAboutUsPage.remove();
    }
    // Create a container for the about us page and add the appropriate class to it.
    const aboutUsPage = document.createElement("div");
    aboutUsPage.classList.add("about-us-page");
    // Create the navbar for the about us page and append it to the about us page.
    const navBar = createNavBar(screenSize);
    aboutUsPage.appendChild(navBar);
    // Create the body for the about us page and append it to the about us page.
    const aboutUsBody = createAboutUsBody();
    aboutUsPage.appendChild(aboutUsBody);
    //return the about us page to be rendered on the page.
    return aboutUsPage;
}   
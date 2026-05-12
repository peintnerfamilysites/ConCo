// Export the header function to be used in the home page creation function.
export default function createHomeHeader(screenSize) {
  // Check the screen size and create the appropriate header for the home page.
  if (screenSize === "mobile") {
    // If the screen size is mobile, create a header with a smaller font size and a different layout.
    const homeHeaderContainer = document.createElement("div");
    homeHeaderContainer.classList.add("home-header-container-mobile");
    const homeHeaderHeading = document.createElement("h1");
    homeHeaderHeading.classList.add("home-header-heading-mobile");
    homeHeaderHeading.textContent = "ConCo";
    homeHeaderContainer.appendChild(homeHeaderHeading);
    return homeHeaderContainer;
  } else {
    // If the screen size is desktop, create a header with a larger font size and a different layout.
    const homeHeaderContainer = document.createElement("div");
    homeHeaderContainer.classList.add("home-header-container-desktop");
    const homeHeaderHeading = document.createElement("h1");
    homeHeaderHeading.classList.add("home-header-heading-desktop");
    homeHeaderHeading.textContent = "ConCo";
    homeHeaderContainer.appendChild(homeHeaderHeading);
    return homeHeaderContainer;
  }
}
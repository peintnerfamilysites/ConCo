// Create the mobile navigation menu modal and return the html element to be rendered on the page.
export default function createNavModal() {
  // Create a container for the mobile navigation menu and add the appropriate class to it.
  const navModalContainer = document.createElement("div");
  navModalContainer.classList.add("nav-modal-container");
  navModalContainer.id = "mobile-nav-menu";
  // Creat an img element for the close button and add the appropriate class to it.
  const closeButton = document.createElement("img");
  closeButton.classList.add("nav-modal-close-button");
  closeButton.src = "https://img.icons8.com/ios-glyphs/30/000000/macos-close.png";
  closeButton.alt = "Close Button";
  closeButton.addEventListener("click", () => {
    // When the close button is clicked, remove the class "open" from the modal container to hide it.
  });
  // Append the close button to the modal container.
  navModalContainer.appendChild(closeButton);
  // Return the modal container to be rendered on the page.              
  return navModalContainer;
}
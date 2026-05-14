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
    const navLink = document.createElement("a");
    navLink.classList.add("nav-link");
    navLink.href = "#";
    navLink.textContent = link;
    navLinksContainer.appendChild(navLink);
  });
  // Append the close button to the modal container.
  navModalContainer.appendChild(closeButton);
  // Append the navigation links container to the modal container.
  navModalContainer.appendChild(navLinksContainer); 
  // Return the modal container to be rendered on the page.              
  return navModalContainer;
}
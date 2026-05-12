import createNavModal from "../pages/NavBar/createNavModal.js";

// This function will open a modal 
export default function modalOpen(modalId) {
  if (modalId === "mobile-nav-menu") {
    // Create the modal element
    const modal = createNavModal();
    // Append the modal to the modal container
    const modalContainer = document.getElementById("modal-container");
    modalContainer.appendChild(modal);
  }
}
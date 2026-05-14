import createNavModal from "../pages/NavBar/createNavModal.js";

// This function will open a modal 
export default function modalOpen(modalId) {
  if (modalId === "mobile-nav-menu") {
    const modalContainer = document.getElementById("modal-container");
    // Get current modal if it exists
    const currentModal = document.getElementById(modalId);
      if (currentModal) {
        // If the modal already exists, clear its content to close it.
        currentModal.remove();
      }
    // Create the modal element
    const modal = createNavModal(modalId);
    // Append the modal to the modal container
    modalContainer.appendChild(modal);
  }
}
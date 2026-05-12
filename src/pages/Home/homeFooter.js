// Export the home footer creation function to be used in the home page creation function.
export default function createHomeFooter() {
  // Create a container for the home footer and add the appropriate class to it.
  const homeFooterContainer = document.createElement("div");
  homeFooterContainer.classList.add("home-footer-container");
  // Create a paragraph for the home footer and add the appropriate class to it.
  const homeFooterParagraph = document.createElement("p");
  homeFooterParagraph.classList.add("home-footer-paragraph");
  homeFooterParagraph.textContent =
    "ConCo is a convention management system that allows you to easily manage your convention. With ConCo, you can create and manage your convention, sell tickets, and much more!";
  // Append the paragraph to the home footer container.
  homeFooterContainer.appendChild(homeFooterParagraph);
  // Return the home footer container to be appended to the home page.
  return homeFooterContainer;
}
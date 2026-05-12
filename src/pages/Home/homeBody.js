// Export the home body creation function to be used in the home page creation function.
export default function createHomeBody() {
  // Create a container for the home body and add the appropriate class to it.
  const homeBodyContainer = document.createElement("div");
  homeBodyContainer.classList.add("home-body-container");
  // Create a heading for the home body and add the appropriate class to it.
  const homeBodyHeading = document.createElement("h2");
  homeBodyHeading.classList.add("home-body-heading");
  homeBodyHeading.textContent = "Welcome to ConCo!";
  // Create a paragraph for the home body and add the appropriate class to it.
  const homeBodyParagraph = document.createElement("p");
  homeBodyParagraph.classList.add("home-body-paragraph");
  homeBodyParagraph.textContent =
    "ConCo is a convention management system that allows you to easily manage your convention. With ConCo, you can create and manage your convention, sell tickets, and much more!";
  // Append the heading and paragraph to the home body container.
  homeBodyContainer.appendChild(homeBodyHeading);
  homeBodyContainer.appendChild(homeBodyParagraph);
  // Return the home body container to be appended to the home page.
  return homeBodyContainer;
}
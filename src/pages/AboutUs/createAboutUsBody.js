export default function createAboutUsBody() {
  // Create a container for the about us body and add the appropriate class to it.
  const aboutUsBody = document.createElement("div");
  aboutUsBody.classList.add("about-us-body");
  // Create a heading for the about us page and append it to the about us body.
  const heading = document.createElement("h1");
  heading.textContent = "About Us";
  aboutUsBody.appendChild(heading);
  // Create a paragraph for the about us page and append it to the about us body.
  const paragraph = document.createElement("p");
  paragraph.textContent =
    "We are a team of passionate developers who love creating delicious food. Our mission is to provide our customers with the best food experience possible. We believe that food is not just a necessity, but an art form that should be enjoyed and appreciated. We are committed to using only the freshest ingredients and creating unique and flavorful dishes that will satisfy your taste buds. Thank you for choosing ConCo!";
  aboutUsBody.appendChild(paragraph);
  // Return the about us body to be appended to the about us page.
  return aboutUsBody;
}

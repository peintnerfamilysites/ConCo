export default function createContactUsBody() {
  // Create a container for the contact us body and add the appropriate class to it.
  const contactUsBody = document.createElement("div");
  contactUsBody.classList.add("contact-us-body");
  // Create a heading for the contact us page and append it to the contact us body.
  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";
  contactUsBody.appendChild(heading);
  // Create a paragraph for the contact us page and append it to the contact us body.
  const paragraph = document.createElement("p");
  paragraph.textContent =
    "If you have any questions or concerns, please feel free to contact us at any time. We are always happy to help!";
  contactUsBody.appendChild(paragraph);
  //return the contact us body to be appended to the contact us page.
  return contactUsBody;
}

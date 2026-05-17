export default function createServicesBody() {
    // Create a container for the services body and add the appropriate class to it.
    const servicesBody = document.createElement("div");
    servicesBody.classList.add("services-body");
    // Create a heading for the services page and append it to the services body.
    const heading = document.createElement("h1");
    heading.textContent = "Our Services";
    servicesBody.appendChild(heading);
    // Create a paragraph for the services page and append it to the services body.
    const paragraph = document.createElement("p");
    paragraph.textContent = "We offer a wide range of services to meet your needs. Whether you need help with your insurance, or you just want to learn more about our company, we are here to help!";
    servicesBody.appendChild(paragraph);
    //return the services body to be appended to the services page.
    return servicesBody;
}
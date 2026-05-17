export default function createInsuranceBody() {
    // Create a container for the insurance body and add the appropriate class to it.
    const insuranceBody = document.createElement("div");
    insuranceBody.classList.add("insurance-body");
    // Create a heading for the insurance page and append it to the insurance body.
    const heading = document.createElement("h1");
    heading.textContent = "Insurance Help?";
    insuranceBody.appendChild(heading);
    // Create a paragraph for the insurance page and append it to the insurance body.
    const paragraph = document.createElement("p");
    paragraph.textContent = "If you need help with your insurance, please feel free to contact us at any time. We are always happy to help!";
    insuranceBody.appendChild(paragraph);
    //return the insurance body to be appended to the insurance page.
    return insuranceBody;
}
//This will be a button component that can be reused throughout the app. It will take a label and a tag for which callback function to call when the botton is clicked.
export default function Button(label, tag) {
  const button = document.createElement("button");
  button.innerText = label;
  button.classList.add("button");
  button.addEventListener("click", () => {
    const event = new CustomEvent(tag);
    window.dispatchEvent(event);
  });
  return button;
}
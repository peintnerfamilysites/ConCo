// This function will check the screen size and return a string indicating the size of the screen.
export default function checkScreenSize() {
  // Get the screen width and height.
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  // Check if the screen width is less than or equal to 768 pixels, which is the breakpoint for mobile devices.
  if (screenWidth <= 768) {
    // If the screen width is less than or equal to 768 pixels, render the mobile version of the home page.
    const screenSizeInfo = "mobile";
    return screenSizeInfo;
  } else {
    // If the screen width is greater than 768 pixels, render the desktop version of the home page.
    const screenSizeInfo = "desktop";
    return screenSizeInfo;
  }
}

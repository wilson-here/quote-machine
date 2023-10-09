import React from "react";
import html2canvas from "html2canvas";
function SaveAsWallpaper() {
  function captureWebpage() {
    // Use html2canvas to capture the page
    html2canvas(document.body).then(function (canvas) {
      // Convert the canvas to an image URL
      var imageUrl = canvas.toDataURL();

      // Create a download link for the image
      var downloadLink = document.createElement("a");
      downloadLink.href = imageUrl;
      downloadLink.download = "webpage-screenshot.png"; // Specify a filename

      // Trigger a click on the download link to initiate the download
      downloadLink.click();
    });
  }

  // Function to check if everything is loaded
  function checkIfLoaded() {
    if (document.readyState === "complete") {
      // Page and its assets are fully loaded
      // Enable the capture button
      document.getElementById("captureButton").disabled = false;
    }
  }

  // Check if everything is loaded
  checkIfLoaded();

  // Attach click event listener to the capture button
  document
    .getElementById("captureButton")
    .addEventListener("click", function () {
      // Capture the webpage when the button is clicked
      captureWebpage();
    });
  return (
    <button className="quote-btns__save-as-wallpaper" id="captureButton">
      Capture Webpage
    </button>
  );
}

export default SaveAsWallpaper;

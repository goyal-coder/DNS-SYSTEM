document.addEventListener("DOMContentLoaded", () => {
  // Select the arrow icon (corrected selector)
  const arrow = document.querySelector(".fa-angle-down");

  // Select the audio element
  const clickSound = document.getElementById("clickSound");

  if (arrow && clickSound) {
    // Add click event listener to the arrow
    arrow.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default anchor behavior

      // Play sound with error handling
      clickSound.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });

      // Smooth scroll to section
      document.querySelector("#home").scrollIntoView({
        behavior: "smooth",
      });
    });
  } else {
    console.error("Could not find required elements:", {
      arrow: arrow,
      clickSound: clickSound,
    });
  }
});

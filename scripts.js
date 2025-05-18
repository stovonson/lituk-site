const names = ["will", "john", "george", "thomas", "arthur", "james", "charles"];
let index = 0;
const el = document.getElementById("cycling-name");
const staticHeader = document.querySelector(".static-header");

// Ensure font is loaded before starting animation
document.fonts.ready.then(() => {
  function cycleName() {
    // Fade out and slide out
    el.style.opacity = 0;
    el.style.transform = "translateX(-15px)"; // Reduced distance
    staticHeader.style.transform = "translateX(8px)"; // Reduced distance
    staticHeader.style.opacity = 0.8;

    requestAnimationFrame(() => {
      setTimeout(() => {
        // Update text and prepare to slide in
        index = (index + 1) % names.length;
        el.textContent = names[index];
        el.style.transform = "translateX(15px)";
        el.style.opacity = 0;
        staticHeader.style.transform = "translateX(-8px)";
        staticHeader.style.opacity = 0.8;

        requestAnimationFrame(() => {
          setTimeout(() => {
            // Slide in
            el.style.transform = "translateX(0)";
            el.style.opacity = 1;
            staticHeader.style.transform = "translateX(0)";
            staticHeader.style.opacity = 1;
          }, 50);
        });
      }, 350); // Slightly reduced for smoother flow
    });
  }

  setInterval(cycleName, 2000);
});
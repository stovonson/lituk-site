const animatedText = document.getElementById("animated-text");

const texts = [
  "tom",
  "will",
  "john",
  "steve",
  "jen",
  "charles",
  "katie",
  "ryan",
  "luke"
];

let currentIndex = 0;

function updateText() {
  // Start slide out animation
  animatedText.classList.add("slide-out");

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % texts.length;
    animatedText.textContent = texts[currentIndex];
    
    animatedText.classList.remove("slide-out");
  }, 300);
}

// Start the animation cycle
setInterval(updateText, 2500);

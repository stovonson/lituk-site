const animatedText = document.getElementById("animated-text");

      const texts = [
        "tom.lives-in-the.uk",
        "will.lives-in-the.uk",
        "john.lives-in-the.uk",
        "steve.lives-in-the.uk",
        "jen.lives-in-the.uk",
        "charles.lives-in-the.uk",
        "katie.lives-in-the.uk",
        "ryan.lives-in-the.uk",
        "luke.lives-in-the.uk"
      ];

      let currentIndex = 0;

      function updateText() {
        animatedText.classList.add("fade");
        
        setTimeout(() => {
          currentIndex = (currentIndex + 1) % texts.length;
          animatedText.textContent = texts[currentIndex];
          
          animatedText.classList.remove("fade");
        }, 150);
      }

      setInterval(updateText, 2000);
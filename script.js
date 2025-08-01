// Generate animated hearts, sparkles, balloons, and emojis for Page 1
function createPage1Decor() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 2 + "s";
    document.getElementById("page1").appendChild(heart);
  }
  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.animationDuration = 3 + Math.random() * 2 + "s";
    document.getElementById("page1").appendChild(sparkle);
  }
  for (let i = 0; i < 15; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = 5 + Math.random() * 2 + "s";
    document.getElementById("page1").appendChild(balloon);
  }
  for (let i = 0; i < 15; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 4 + Math.random() * 2 + "s";
    document.getElementById("page1").appendChild(confetti);
  }
  for (let i = 0; i < 10; i++) {
    const firework = document.createElement("div");
    firework.className = "firework";
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.animationDuration = 3 + Math.random() * 2 + "s";
    document.getElementById("page1").appendChild(firework);
  }
  const emojis = ["🎈", "✨", "🎉", "🌟", "💖", "🎁"];
  for (let i = 0; i < 15; i++) {
    const emoji = document.createElement("div");
    emoji.className = "emoji-circle";
    emoji.textContent = emojis[i % emojis.length];
    emoji.style.left = Math.random() * 80 + "vw";
    emoji.style.top = Math.random() * 80 + "vh";
    emoji.style.animationDuration = 6 + Math.random() * 4 + "s";
    document.getElementById("page1").appendChild(emoji);
  }
  for (let i = 0; i < 15; i++) {
    const emoji = document.createElement("div");
    emoji.className = "emoji-wave";
    emoji.textContent = emojis[i % emojis.length];
    emoji.style.left = Math.random() * 50 + "vw";
    emoji.style.top = Math.random() * 80 + "vh";
    emoji.style.animationDuration = 8 + Math.random() * 4 + "s";
    document.getElementById("page1").appendChild(emoji);
  }
}

// Generate animated stars, gifts, hearts, and emojis for Page 2
function createPage2Decor() {
  for (let i = 0; i < 20; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = 3 + Math.random() * 2 + "s";
    document.getElementById("page2").appendChild(star);
  }
  for (let i = 0; i < 15; i++) {
    const gift = document.createElement("div");
    gift.className = "gift";
    gift.style.left = Math.random() * 100 + "vw";
    gift.style.animationDuration = 4 + Math.random() * 2 + "s";
    document.getElementById("page2").appendChild(gift);
  }
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-emoji";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 2 + "s";
    document.getElementById("page2").appendChild(heart);
  }
  for (let i = 0; i < 15; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 4 + Math.random() * 2 + "s";
    document.getElementById("page2").appendChild(confetti);
  }
  for (let i = 0; i < 10; i++) {
    const firework = document.createElement("div");
    firework.className = "firework";
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.animationDuration = 3 + Math.random() * 2 + "s";
    document.getElementById("page2").appendChild(firework);
  }
  const emojis = ["🌟", "🎁", "💖", "🎈", "✨", "🎂"];
  for (let i = 0; i < 15; i++) {
    const emoji = document.createElement("div");
    emoji.className = "emoji-fade";
    emoji.textContent = emojis[i % emojis.length];
    emoji.style.left = Math.random() * 50 + "vw";
    emoji.style.animationDuration = 5 + Math.random() * 3 + "s";
    document.getElementById("page2").appendChild(emoji);
  }
  for (let i = 0; i < 15; i++) {
    const emoji = document.createElement("div");
    emoji.className = "emoji-wave";
    emoji.textContent = emojis[i % emojis.length];
    emoji.style.left = Math.random() * 50 + "vw";
    emoji.style.top = Math.random() * 80 + "vh";
    emoji.style.animationDuration = 8 + Math.random() * 4 + "s";
    document.getElementById("page2").appendChild(emoji);
  }
}

// Generate animated balloons, gift boxes, sparkles, and emojis for Page 3
function createPage3Decor() {
  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = 5 + Math.random() * 2 + "s";
    document.getElementById("page3").appendChild(balloon);
  }
  for (let i = 0; i < 15; i++) {
    const gift = document.createElement("div");
    gift.className = "gift-box";
    gift.style.left = Math.random() * 100 + "vw";
    gift.style.animationDuration = 4 + Math.random() * 2 + "s";
    document.getElementById("page3").appendChild(gift);
  }
  for (let i = 0; i < 15; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.animationDuration = 3 + Math.random() * 2 + "s";
    document.getElementById("page3").appendChild(sparkle);
  }
  for (let i = 0; i < 15; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 4 + Math.random() * 2 + "s";
    document.getElementById("page3").appendChild(confetti);
  }
  for (let i = 0; i < 10; i++) {
    const firework = document.createElement("div");
    firework.className = "firework";
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.animationDuration = 3 + Math.random() * 2 + "s";
    document.getElementById("page3").appendChild(firework);
  }
  const emojis = ["🎂", "🎁", "🎈", "✨", "🌟", "💖"];
  for (let i = 0; i < 15; i++) {
    const emoji = document.createElement("div");
    emoji.className = "emoji-scale";
    emoji.textContent = emojis[i % emojis.length];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = 4 + Math.random() * 3 + "s";
    document.getElementById("page3").appendChild(emoji);
  }
  for (let i = 0; i < 15; i++) {
    const emoji = document.createElement("div");
    emoji.className = "emoji-wave";
    emoji.textContent = emojis[i % emojis.length];
    emoji.style.left = Math.random() * 50 + "vw";
    emoji.style.top = Math.random() * 80 + "vh";
    emoji.style.animationDuration = 8 + Math.random() * 4 + "s";
    document.getElementById("page3").appendChild(emoji);
  }
}

// Generate animated sparkles and emojis for Page 4
function createPage4Decor() {
  // Left side animations
  for (let i = 0; i < 10; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle side-left";
    sparkle.style.left = "0";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.animationDuration = 8 + Math.random() * 4 + "s";
    document.getElementById("page4").appendChild(sparkle);
  }
  for (let i = 0; i < 5; i++) {
    const emoji = document.createElement("div");
    emoji.className = "emoji-bounce side-left";
    emoji.textContent = ["🎁", "✨", "🌹", "🎈", "💖", "🎂"][i % 6];
    emoji.style.left = "0";
    emoji.style.top = Math.random() * 100 + "vh";
    emoji.style.animationDuration = 10 + Math.random() * 4 + "s";
    document.getElementById("page4").appendChild(emoji);
  }
  for (let i = 0; i < 10; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti side-left";
    confetti.style.left = "0";
    confetti.style.top = Math.random() * 100 + "vh";
    confetti.style.animationDuration = 8 + Math.random() * 4 + "s";
    document.getElementById("page4").appendChild(confetti);
  }
  for (let i = 0; i < 5; i++) {
    const firework = document.createElement("div");
    firework.className = "firework side-left";
    firework.style.left = "0";
    firework.style.top = Math.random() * 100 + "vh";
    firework.style.animationDuration = 8 + Math.random() * 4 + "s";
    document.getElementById("page4").appendChild(firework);
  }

  // Right side animations
  for (let i = 0; i < 10; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle side-right";
    sparkle.style.right = "0";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.animationDuration = 8 + Math.random() * 4 + "s";
    document.getElementById("page4").appendChild(sparkle);
  }
  for (let i = 0; i < 5; i++) {
    const emoji = document.createElement("div");
    emoji.className = "emoji-bounce side-right";
    emoji.textContent = ["🎁", "✨", "🌹", "🎈", "💖", "🎂"][i % 6];
    emoji.style.right = "0";
    emoji.style.top = Math.random() * 100 + "vh";
    emoji.style.animationDuration = 10 + Math.random() * 4 + "s";
    document.getElementById("page4").appendChild(emoji);
  }
  for (let i = 0; i < 10; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti side-right";
    confetti.style.right = "0";
    confetti.style.top = Math.random() * 100 + "vh";
    confetti.style.animationDuration = 8 + Math.random() * 4 + "s";
    document.getElementById("page4").appendChild(confetti);
  }
  for (let i = 0; i < 5; i++) {
    const firework = document.createElement("div");
    firework.className = "firework side-right";
    firework.style.right = "0";
    firework.style.top = Math.random() * 100 + "vh";
    firework.style.animationDuration = 8 + Math.random() * 4 + "s";
    document.getElementById("page4").appendChild(firework);
  }

  // Top animations
  for (let i = 0; i < 10; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle top";
    sparkle.style.top = "0";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.animationDuration = 10 + Math.random() * 4 + "s";
    document.getElementById("page4").appendChild(sparkle);
  }
  for (let i = 0; i < 5; i++) {
    const emoji = document.createElement("div");
    emoji.className = "emoji-bounce top";
    emoji.textContent = ["🎁", "✨", "🌹", "🎈", "💖", "🎂"][i % 6];
    emoji.style.top = "0";
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = 12 + Math.random() * 4 + "s";
    document.getElementById("page4").appendChild(emoji);
  }
  for (let i = 0; i < 10; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti top";
    confetti.style.top = "0";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 10 + Math.random() * 4 + "s";
    document.getElementById("page4").appendChild(confetti);
  }
  for (let i = 0; i < 5; i++) {
    const firework = document.createElement("div");
    firework.className = "firework top";
    firework.style.top = "0";
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.animationDuration = 10 + Math.random() * 4 + "s";
    document.getElementById("page4").appendChild(firework);
  }

  // Bottom animations
  for (let i = 0; i < 10; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle bottom";
    sparkle.style.bottom = "0";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.animationDuration = 10 + Math.random() * 4 + "s";
    document.getElementById("page4").appendChild(sparkle);
  }
  for (let i = 0; i < 5; i++) {
    const emoji = document.createElement("div");
    emoji.className = "emoji-bounce bottom";
    emoji.textContent = ["🎁", "✨", "🌹", "🎈", "💖", "🎂"][i % 6];
    emoji.style.bottom = "0";
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = 12 + Math.random() * 4 + "s";
    document.getElementById("page4").appendChild(emoji);
  }
  for (let i = 0; i < 10; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti bottom";
    confetti.style.bottom = "0";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 10 + Math.random() * 4 + "s";
    document.getElementById("page4").appendChild(confetti);
  }
  for (let i = 0; i < 5; i++) {
    const firework = document.createElement("div");
    firework.className = "firework bottom";
    firework.style.bottom = "0";
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.animationDuration = 10 + Math.random() * 4 + "s";
    document.getElementById("page4").appendChild(firework);
  }
}

// Generate confetti for popup
function createPopupConfetti() {
  const popupContent = document.querySelector(".popup-content");
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.className = "popup-confetti";
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.animationDuration = 2 + Math.random() * 2 + "s";
    confetti.style.background = i % 2 === 0 ? "#ff4500" : "#ff69b4";
    popupContent.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
  }
}

// Generate crackers for the entire page
function createCrackers() {
  const colors = ["#ff4500", "#ff69b4", "#ffd700", "#800080", "#00ff00"];
  for (let i = 0; i < 100; i++) {
    const cracker = document.createElement("div");
    cracker.className = "cracker";
    cracker.style.left = Math.random() * 100 + "vw";
    cracker.style.top = "-20vh";
    cracker.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    cracker.style.animationDuration = 3 + Math.random() * 2 + "s";
    document.body.appendChild(cracker);
    setTimeout(() => cracker.remove(), 5000);
  }
}

// Generate wave emojis for image popup
function createImagePopupDecor() {
  const popupImage = document.querySelector(".popup-image-content");
  const emojis = ["🎉", "✨", "🌟", "💖", "🎈", "🎁"];
  for (let i = 0; i < 15; i++) {
    const emoji = document.createElement("div");
    emoji.className = "emoji-wave";
    emoji.textContent = emojis[i % emojis.length];
    emoji.style.left = Math.random() * 100 + "%";
    emoji.style.top = Math.random() * 100 + "%";
    emoji.style.animationDuration = 8 + Math.random() * 4 + "s";
    popupImage.appendChild(emoji);
  }
}

// Page 1 interactions
const messageBox = document.querySelector(".message-box");
const celebrateBox = document.querySelector(".celebrate-box");
const bearBox = document.querySelector(".bear-box");

messageBox.addEventListener("click", () => {
  messageBox.textContent = "💫 It's the most special day for you 🎈";
  celebrateBox.style.display = "block";
  bearBox.style.display = "block";
});

celebrateBox.addEventListener("click", () => {
  document.getElementById("page1").style.display = "none";
  const page2 = document.getElementById("page2");
  page2.style.display = "flex";
  const cakeBox = page2.querySelector(".cake-box");
  cakeBox.style.display = "block"; // Ensure the button is visible
});

// Page 2 interactions
const cakeBox = document.querySelector(".cake-box");
cakeBox.addEventListener("click", () => {
  document.getElementById("page2").style.display = "none";
  document.getElementById("page3").style.display = "flex";
});

// Page 3 interactions
const fires = document.querySelectorAll(".fire");
const birthdayMessage = document.querySelector(".birthday-message");
const continueBox = document.querySelector(".continue-box");
let firesOff = 0;

fires.forEach((fire) => {
  fire.addEventListener("click", () => {
    fire.parentElement.classList.add("off");
    firesOff++;
    if (firesOff === 5) {
      birthdayMessage.style.display = "block";
      continueBox.style.display = "block";
    }
  });
});

continueBox.addEventListener("click", () => {
  document.getElementById("page3").style.display = "none";
  document.getElementById("page4").style.display = "flex";
  createPage4Decor(); // Ensure animations are re-triggered
});

// Page 4 interactions
const wishBox = document.querySelector(".wish-box");
const popup = document.querySelector(".popup");
const popupWish = document.querySelector(".popup-wish");
const popupWishGranted = document.querySelector(".popup-wish-granted");
const blowCandles = document.querySelector(".blow-candles");
const wishGranted = document.querySelector(".wish-granted");
const continueCelebrating = document.querySelector(".continue-celebrating");

wishBox.addEventListener("click", () => {
  popup.style.display = "flex";
});

blowCandles.addEventListener("click", () => {
  createPopupConfetti();
  popup.style.display = "none";
  popupWish.style.display = "flex";
  createCrackers();
});

wishGranted.addEventListener("click", () => {
  popupWish.style.display = "none";
  popupWishGranted.style.display = "flex";
});

continueCelebrating.addEventListener("click", () => {
  popupWishGranted.style.display = "none";
  document.getElementById("page4").style.display = "none";
  document.getElementById("page1").style.display = "flex";
  // Reset for replay
  messageBox.textContent = "✨ I have something special for you ✨";
  celebrateBox.style.display = "none";
  bearBox.style.display = "none";
  fires.forEach((fire) => fire.parentElement.classList.remove("off"));
  firesOff = 0;
  birthdayMessage.style.display = "none";
  continueBox.style.display = "none";
});

// Close button for wish popups
const closeButtons = document.querySelectorAll(".close-btn");
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    popup.style.display = "none";
    popupWish.style.display = "none";
    popupWishGranted.style.display = "none";
  });
});

// Image popup interactions
const galleryImages = document.querySelectorAll(".gallery-image");
const popupImage = document.querySelector(".popup-image");
const popupImageContent = document.querySelector(".popup-image-content img");
const closeBtnImage = document.querySelector(".close-btn-image");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    popupImageContent.src = image.src;
    popupImage.style.display = "flex";
    createImagePopupDecor();
  });
});

closeBtnImage.addEventListener("click", () => {
  popupImage.style.display = "none";
  popupImageContent.src = "";
  const waveEmojis = document.querySelectorAll(
    ".popup-image-content .emoji-wave"
  );
  waveEmojis.forEach((emoji) => emoji.remove());
});

popupImage.addEventListener("click", (e) => {
  if (e.target === popupImage) {
    popupImage.style.display = "none";
    popupImageContent.src = "";
    const waveEmojis = document.querySelectorAll(
      ".popup-image-content .emoji-wave"
    );
    waveEmojis.forEach((emoji) => emoji.remove());
  }
});

// Initialize animations
createPage1Decor();
createPage2Decor();
createPage3Decor();
createPage4Decor();

const audio = document.getElementById("bg-music");

// Try to play on page load
window.addEventListener("load", () => {
  const tryPlay = () => {
    audio
      .play()
      .then(() => {
        console.log("Audio autoplayed.");
      })
      .catch((error) => {
        console.warn("Autoplay failed. Waiting for user interaction.");
        // Wait for first click to play audio
        const unlockAudio = () => {
          audio.play();
          document.removeEventListener("click", unlockAudio);
          console.log("Audio started after user interaction.");
        };
        document.addEventListener("click", unlockAudio);
      });
  };

  tryPlay();
});

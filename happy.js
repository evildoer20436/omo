function openEnvelope() {
  document.querySelector(".envelope-container").style.display = "none";
  document.querySelector(".card").classList.remove("hidden");
}

// Typing + Flowers + Confetti + Music
const messages = [
  "🌸 Today isn’t just any day...",
  "✨ It’s a celebration of YOU.",
  "🎂 Another year, another blessing.",
  "💐 May love and joy surround you.",
  "🥳 HAPPY BIRTHDAY!!!",
  "💐 May love and joy always surround you.",
  "💖 Every moment with you is special.",
  "🌹 My heart beats for you every day.",
  "🌟 May all your dreams come true.",
  "🎉 Happy Birthday, my love!",
  "💫 Thank you for filling my life with light.",
  "💌 You are my reason to smile every day.",
  "🌷 May you always receive all the love in the world.",
  "❤️ There’s no one like you, my life.",
  "🎶 Your laughter is the sweetest music to my heart.",
  "💞 Wishing you infinite happiness this year."
];
let index = 0;
let charIndex = 0;

function showMessage() {
  const button = document.querySelector("button");
  button.disabled = true;
  button.innerText = "🎉 Celebrating...";

  const messageEl = document.getElementById("message");
  messageEl.innerText = "";
  index = 0;
  charIndex = 0;

  typeMessage(messageEl);
  startFlowerShower();
  startConfetti();
  playMusic();
}

function typeMessage(element) {
  if (index < messages.length) {
    if (charIndex < messages[index].length) {
      element.innerText += messages[index].charAt(charIndex);
      charIndex++;
      setTimeout(() => typeMessage(element), 45);
    } else {
      element.innerText += "\n\n";
      index++;
      charIndex = 0;
      setTimeout(() => typeMessage(element), 600);
    }
  }
}

function startFlowerShower() {
  const flowers = ["🌸","🌼","🌺","💐","🌷","🌹"];
  for (let i=0;i<70;i++) setTimeout(()=>createFallingItem(flowers,"flower"), i*120);
}

function startConfetti() {
  const confetti = ["🎊","✨","💖","🎉"];
  for (let i=0;i<50;i++) setTimeout(()=>createFallingItem(confetti,"confetti"), i*150);
}

function createFallingItem(items,className){
  const item=document.createElement("div");
  item.className=className;
  item.innerText=items[Math.floor(Math.random()*items.length)];
  item.style.left=Math.random()*100+"vw";
  item.style.fontSize=Math.random()*20+18+"px";
  item.style.animationDuration=Math.random()*3+4+"s";
  document.body.appendChild(item);
  setTimeout(()=>item.remove(),8000);
}

function playMusic(){
  const audio=new Audio("https://assets.mixkit.co/music/preview/mixkit-happy-birthday-to-you-108.mp3");
  audio.volume=0.5;
  audio.play();
}
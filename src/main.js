const body = document.querySelector("body");
const main = document.querySelector("main");
const form = document.querySelector("form");
const btns = document.querySelectorAll(".btn");
const btnContainer = document.querySelector(".btn-container");
const input = document.getElementById("input");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const moodBox = document.getElementById("moodBox");
const growBtn = document.getElementById("growBtn");
const shrinkBtn = document.getElementById("shrinkBtn");
const secretMsg = document.getElementById("secretMsg");
const msg = document.getElementById("msg");
const secretBtn = document.getElementById("secretBtn");
const toggleModeBtn = document.getElementById("toggleModeBtn");
const quest = document.getElementById("quest");
const answer = document.getElementById("answer");

// SET FOR LIGHT MODE VARIBLES
const root = document.documentElement;
const lightTheme = {
  "--primary-bg": "#fafafa",
  "--surface-bg": "#fafafa",
  "--primary-text": "#484b6a",
  "--secondary-text": "#9394a5",
  "--completed-text": "#d2d3db",
  "--primary-border": "#cacde8",
  "--active-text": "#3a7bfd",
};
// SET CSS DARK MODE VARIBLES
const darkTheme = {
  "--primary-bg": "#161722",
  "--surface-bg": "#25273c",
  "--primary-text": "#e4e5f1",
  "--secondary-text": "#5c5f7f",
  "--completed-text": "#4d5066",
  "--primary-border": "#4d5066",
  "--active-text": "#3a7bfd",
};

body.style.backgroundColor = "var(--primary-bg)";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.height = "100vh";
body.style.padding = "2rem";
body.style.fontFamily = "Josefin Sans";

// STYLE FOR MAIN CONTAINER
main.style.backgroundColor = "var(--surface-bg)";
main.style.padding = "2rem";
main.style.borderRadius = ".5rem";
main.style.boxShadow = "0 .25rem .5rem rgba(0, 0, 0, 0.1)";
main.style.width = "100%";
main.style.maxWidth = "33rem";

// STYLE FOR H2
h2.style.color = "var(--primary-text)";
h2.style.textAlign = "center";
h2.style.fontSize = "2rem";

// STYLE FOR FORM
form.style.width = "100%";
form.style.margin = "1rem 0";
form.style.overflow = "hidden";

// STYLE FOR INPUT
input.style.width = "100%";
input.style.padding = ".75rem 1rem";
input.style.fontSize = "1rem";
input.style.border = `1px solid var(--primary-border)`;
input.style.borderRadius = ".3rem";
input.style.outline = "none";

// STYLE FOR H3
h3.style.color = "var(--active-text)";
h3.style.textAlign = "center";
h3.style.marginBottom = "1.5rem";

// dynamic greeting
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = input.value.trim();
  if (name) {
    h3.innerText = `Hello, ${name}!`;
    h3.style.color = "green";
    h3.style.fontWeight = "bold";
    input.value = "";
  }
  if (!name) {
    h3.innerText = "Hello, friend!";
    h3.style.color = "";
    h3.style.fontWeight = "";
  }
});
// 2. Mood Box Resizing
moodBox.style.width = "100px";
moodBox.style.height = "100px";
moodBox.style.backgroundColor = "var(--primary-border)";
moodBox.style.margin = "auto";
moodBox.style.transition = "all 0.5s ease";

growBtn.addEventListener("click", () => {
  const maxSize = 150;
  const newWidth = parseInt(moodBox.style.width) + 10;
  const newHeight = parseInt(moodBox.style.height) + 10;
  moodBox.style.width = Math.min(maxSize, newWidth) + "px";
  moodBox.style.height = Math.min(maxSize, newHeight) + "px";
});

shrinkBtn.addEventListener("click", () => {
  const minSize = 100;
  const currentWidth = parseInt(moodBox.style.width) || minSize;
  const currentHeight = parseInt(moodBox.style.height) || minSize;
  const newWidth = currentWidth - 10;
  const newHeight = currentHeight - 10;
  moodBox.style.width = Math.max(minSize, newWidth) + "px";
  moodBox.style.height = Math.max(minSize, newHeight) + "px";
});

// STYLE FOR BOTTONS
btnContainer.style.display = "flex";
btnContainer.style.justifyContent = "center";
btnContainer.style.alignItems = "center";
btnContainer.style.gap = "1rem";

btns.forEach((btn) => {
  btn.style.backgroundColor = "var(--active-text)";
  btn.style.color = "#fff";
  btn.style.border = "none";
  btn.style.margin = "1rem 0";
  btn.style.width = "100%";
  btn.style.padding = ".75rem 2rem";
  btn.style.borderRadius = ".3rem";
  btn.style.cursor = "pointer";
  btn.style.userSelect = "none";
});

msg.style.position = "absolute";
msg.style.top = "1rem";
msg.style.left = "0";
msg.style.display = "flex";
msg.style.justifyContent = "center";
msg.style.width = "100%";

secretMsg.style.backgroundColor = "var(--secondary-text)";
secretMsg.style.color = "#fafafa";
secretMsg.style.padding = "1rem";
secretMsg.style.borderRadius = ".5rem";
secretMsg.style.boxShadow = "0 .25rem .5rem rgba(0, 0, 0, 0.1)";
secretMsg.style.transform = "translateY(-100%)";
secretMsg.style.opacity = "0";
secretMsg.style.zIndex = "10";
secretMsg.style.transition = "all 0.5s ease";

// SECRET MESSAGE TOGGLE FUNCTION
secretBtn.addEventListener("click", () => {
  if (secretMsg.style.opacity === "0") {
    secretMsg.style.transform = "translateY(0)";
    secretMsg.style.opacity = "1";
    if (secretMsg.style.opacity === "1") {
      setTimeout(() => {
        secretMsg.style.transform = "translateY(-100%)";
        secretMsg.style.opacity = "0";
      }, 3000);
    }
  } else if (secretMsg.style.opacity === "1") {
    secretMsg.style.transform = "translateY(-100%)";
    secretMsg.style.opacity = "0";
  }
});

// TOGGLE FOR LIGHT MODE AND DARK MODE
function applyTheme(theme) {
  for (const key in theme) {
    root.style.setProperty(key, theme[key]);
  }
}

const saveTheme = localStorage.getItem("key");
if (saveTheme === "dark") {
  applyTheme(darkTheme);
  document.body.dataset.key = "dark";
  toggleModeBtn.innerText = "Light Mode";
} else {
  applyTheme(lightTheme);
  document.body.dataset.key = "light";
  toggleModeBtn.innerText = "Dark Mode";
}
// if (localStorage.getItem("key") === "dark") {
//   document.body.classList.add("darkmode");
//   toggleModeBtn.innerText = "Light Mode";
// } else {
//   toggleModeBtn.innerText = "Dark Mode";
// }

toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");

  if (document.body.dataset.theme === "dark") {
    applyTheme(lightTheme);
    document.body.dataset.theme = "light";
    toggleModeBtn.innerText = "Dark Mode";
    localStorage.setItem("key", "light");
  } else {
    applyTheme(darkTheme);
    document.body.dataset.theme = "dark";
    toggleModeBtn.innerText = "Light Mode";
    localStorage.setItem("key", "dark");
  }
});

quest.style.color = "var(--primary-text)";
quest.style.textAlign = "center";
quest.style.marginBottom = ".5rem";
answer.style.color = "var(--secondary-text)";
answer.style.fontStyle = "italic";
answer.style.fontSize = ".8rem"

answer.innerText =
  "innerHTML is used when you need to work with the full HTML structure: of an element, including tags and formatting. While the use of innerText is when you only need to retrieve or set the visible, human-readable text content: of an element, without any HTML formatting.";

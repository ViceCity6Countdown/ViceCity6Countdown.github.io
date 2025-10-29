// Countdown setup
const countdownDate = new Date("May 25, 2026 00:00:00 PST").getTime();
const countdownStart = new Date("Dec 1, 2025 00:00:00 PST").getTime();
const countdownDiv = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();

  if (now < countdownStart) {
    countdownDiv.innerHTML = "<p>The countdown begins on December 1, 2025!</p>";
    return;
  }

  const distance = countdownDate - now;

  if (distance < 0) {
    countdownDiv.innerHTML = "<p>GTA 6 is finally here! Vice City awaits!</p>";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();

// Comment section
const commentForm = document.getElementById("commentForm");
const commentInput = document.getElementById("commentInput");
const commentList = document.getElementById("commentList");

const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
savedComments.forEach(addComment);

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const comment = commentInput.value.trim();
  if (comment) {
    addComment(comment);
    savedComments.push(comment);
    localStorage.setItem("comments", JSON.stringify(savedComments));
    commentInput.value = "";
  }
});

function addComment(text) {
  const li = document.createElement("li");
  li.textContent = text;
  commentList.appendChild(li);
}

// Email subscription
const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("emailInput");
const emailList = document.getElementById("emailList");

const savedEmails = JSON.parse(localStorage.getItem("emails")) || [];
savedEmails.forEach(addEmail);

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  if (email && validateEmail(email)) {
    addEmail(email);
    savedEmails.push(email);
    localStorage.setItem("emails", JSON.stringify(savedEmails));
    emailInput.value = "";
  }
});

function addEmail(email) {
  const li = document.createElement("li");
  li.textContent = email;
  emailList.appendChild(li);
}

function validateEmail(email) {
  return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);
}
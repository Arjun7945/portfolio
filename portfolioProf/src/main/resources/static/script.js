function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function showCustomAlert(message) {
  document.getElementById("alert-message-text").textContent = message;
  document.getElementById("custom-alert").classList.add("show");
}

function closeCustomAlert() {
  document.getElementById("custom-alert").classList.remove("show");
}

function showPopupMessageForIntrack() {
  showCustomAlert("The project is currently ongoing. Please check back later for updates!");
}

function showPopupMessageForNEW() {
  showCustomAlert("The project is currently under discussion and is expected to commence soon.");
}



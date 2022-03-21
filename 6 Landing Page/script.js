// Get DOM Elements
const menuToggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

// Event Listeners

menuToggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

// Listen for click on open button
open.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

// Listen for Clikc on close button
close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

// Listen for click outside the modal
window.addEventListener("click", (e) => {
  e.target === modal ? modal.classList.remove("show-modal") : false;
});

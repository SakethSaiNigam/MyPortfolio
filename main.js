// Dark/Light Mode Toggle
const toggle = document.getElementById('modeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});


// Typing Effect
const text = ["Web Developer", "Designer", "Tech Enthusiast"];
let i = 0, j = 0, currentText = '', isDeleting = false;

function type() {
  const typingElement = document.querySelector('.typing');
  if (!typingElement) return;

  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      currentText = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = text[i].substring(0, j--);
    }

    typingElement.textContent = currentText;

    if (j === text[i].length) isDeleting = true;
    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 60 : 120);
  }
}



type();

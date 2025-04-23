// Custom pointer (keep this if already added)
document.addEventListener('mousemove', (e) => {
    const pointer = document.getElementById('custom-pointer');
    pointer.style.left = `${e.clientX}px`;
    pointer.style.top = `${e.clientY}px`;
});

function toggleMyth(card) {
    const details = card.querySelector(".myth-details");
    details.classList.toggle("show");
  }
  

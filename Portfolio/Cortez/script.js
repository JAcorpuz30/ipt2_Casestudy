document.addEventListener("click", (e) => {
  const clickEffect = document.querySelector(".click-effect");

  // Create a new click effect for each click
    const newEffect = clickEffect.cloneNode(true);

    // Set the position of the click effect
    newEffect.style.top = e.clientY + window.scrollY + "px";
  newEffect.style.left = e.clientX + window.scrollX + "px";
  newEffect.classList.add("effect");
  
    // Append the new effect to the body
    document.body.appendChild(newEffect);

    // Remove the effect after 750ms
    setTimeout(() => {
        newEffect.remove();
  }, 750);
});

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
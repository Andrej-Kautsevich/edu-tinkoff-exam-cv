const elements = document.querySelectorAll('[contenteditable]');
elements.forEach((element) => {
  let isRippleActive = false; // Flag to track if a ripple is currently active
  element.addEventListener('click', (event) => {
    if (isRippleActive) return;
    isRippleActive = true;

    element.classList.add('ripple-container');

    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';

    element.appendChild(ripple);

    setTimeout(() => {
      element.removeChild(ripple);
      element.classList.remove('ripple-container');
      isRippleActive = false;
    }, 1200);
  });
});

function saveData() {
  const elements = document.querySelectorAll('[contenteditable]');
  const data = {};
  elements.forEach((element) => {
    if (element.id) data[element.id] = element.textContent;
  });
  localStorage.setItem('cvData', JSON.stringify(data));
}

function loadData() {
  const data = JSON.parse(localStorage.getItem('cvData'));
  if (data) {
    const elements = document.querySelectorAll('[contenteditable]');
    elements.forEach((element) => {
      if (data[element.id]) {
        element.textContent = data[element.id];
      }
    });
  }
}

// Load data on page load
loadData();

// Save data on changes
const elements = document.querySelectorAll('[contenteditable]');
elements.forEach((element) => {
  element.addEventListener('input', saveData);
});

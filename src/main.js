import html2pdf from 'html2pdf.js';

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

const save2PdfBtn = document.getElementById('save-2-pdf-btn');

save2PdfBtn.addEventListener('click', () => {
  const cvElement = document.getElementById('cv-element');

  const options = {
    margin: 10,
    filename: 'my-cv.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }, // PDF settings
  };

  html2pdf().set(options).from(cvElement).save();
});

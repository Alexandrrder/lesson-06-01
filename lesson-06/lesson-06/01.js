const WEB_TECH_IMAGES = [
    'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
    'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
    'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg',
  ];
  
  let currentIndex = 0;
  
  const imgElement = document.getElementById('web-tech-image');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  
  function updateImage() {
    imgElement.src = WEB_TECH_IMAGES[currentIndex];
  }
  
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + WEB_TECH_IMAGES.length) % WEB_TECH_IMAGES.length;
    updateImage();
  });
  
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % WEB_TECH_IMAGES.length;
    updateImage();
  });
  updateImage();
  
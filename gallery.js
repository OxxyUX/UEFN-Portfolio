// List of image files for gallery display

const galleryUEFN = [
  "1.png",
  "2.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
  "20.png",
  "21.png",
  "22.png",
  "23.png",
];

const galleryFNCreative = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
  "20.png",
  "21.png",
  "22.png",
  "23.png",
  "24.png",
  "25.png",
  "26.png",
];

// Reusable function to create and append images to a gallery
function populateGallery(galleryId, imageList, folderPath) {
  const container = document.getElementById(galleryId);
  imageList.slice().reverse().forEach(name => {
    const img = document.createElement("img");
    img.className = "c-s-i";
    img.src = `${folderPath}/${name}`;
    img.loading = "lazy";
    img.alt = "";
    container.appendChild(img);
  });
}

// Call for each gallery with its folder path
populateGallery("gallery-uefn", galleryUEFN, "./Graphics/UEFN-Screenshots");
populateGallery("gallery-fnc", galleryFNCreative, "./Graphics/FNC-Screenshots");
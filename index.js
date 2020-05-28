var i = 0;
var images = [];
var time = 1500;

images[0] = "./img/1D992754-AF11-407E-8C16-EDFA5321D3C7_1_105_c.jpeg";
images[1] = "./img/image00001.jpeg";
images[2] = "./img/BDDACB11-BD3D-4C30-B1B8-19F1C7FACD4A_1_105_c.jpeg";

function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}

window.onload = changeImg;

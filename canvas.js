const imageSelect = document.getElementById("image-select");
const myCanvas = document.getElementById("myCanvas");

const ctx = myCanvas.getContext("2d");

imageSelect.addEventListener("change", function() {
    const selectedImage = imageSelect.value;
    drawImage(selectedImage);
});

function drawImage(imageSrc) {
    const image = new Image();
    image.src = imageSrc;
    image.onload = function() {
      ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
      ctx.drawImage(image, 0, 0, myCanvas.width, myCanvas.height);
    };
}


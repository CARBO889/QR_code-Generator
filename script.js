
let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
    let qrData = qrText.value.trim();

   
    if (qrData === "") {
        alert("Please enter a valid text or URL!");
        return;
    }

    
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrData);

    // Show the image container with the QR code
    imgBox.classList.add("show-img");
}

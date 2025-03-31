const apiUrl = "http://api.qrserver.com/v1/create-qr-code/?data=";
const inputText = document.querySelector(".card input");
const submitButton = document.querySelector(".card button");
const qrImage = document.querySelector(".qr-image");

submitButton.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.keyCode === 13) {
    qrImage.src = apiUrl + inputText.value;
  }
});

submitButton.addEventListener("click", () => {
    qrImage.src = apiUrl + inputText.value;
    document.querySelector(".generated-qr").style.display="block";

});

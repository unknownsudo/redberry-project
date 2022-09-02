const dragArea = document.querySelector(".drag-area");
const uploadButton = document.querySelector("#upload-button");
const input = document.querySelector(".upload-input");
const uploadedImageCont = document.querySelector("#uploaded-image-cont");
let file;

uploadButton.onclick = () => {
  input.click();
};

input.addEventListener("change", function () {
  file = this.files[0];
  dragArea.classList.add("drag-area-active");
  displayFile();
});

dragArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  dragArea.classList.add("drag-area-active");
});

dragArea.addEventListener("dragleave", () => {
  dragArea.classList.remove("drag-area-active");
});

dragArea.addEventListener("drop", (event) => {
  event.preventDefault();
  file = event.dataTransfer.files[0];
  displayFile();
});

function displayFile() {
  let fileType = file.type;
  let validExtension = ["image/jpeg", "image/jpg", "image/png"];
  if (validExtension.includes(fileType)) {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      let fileURL = fileReader.result;
      let imgTag = `<img src="${fileURL}" alt="">`;
      uploadedImageCont.innerHTML = imgTag; // =
      dragArea.style.display = "none";
    };
    fileReader.readAsDataURL(file);
  } else {
    alert("მხოლოდ jpeg, jpg, png ფორმატი!");
    dragArea.classList.remove("active");
  }
}

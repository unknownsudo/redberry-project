const employedForm = document.getElementById("form");
const laptopForm = document.getElementById("laptop-form");
const nameInput = document.getElementById("name");
const lastnameInput = document.getElementById("last-name");
const teamSelect = document.getElementById("team");
const positionSelect = document.getElementById("position");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const redberryRedLogo = document.getElementById("redberry-red-logo");

const regexForGeorgianLetters =
  /[ა,ბ,გ,დ,ე,ვ,ზ,თ,ი,კ,ლ,მ,ნ,ო,პ,ჟ,რ,ს,ტ,უ,ფ,ქ,ღ,ყ,შ,ჩ,ც,ძ,წ,ჭ,ხ,ჯ,ჰ]/g;
let regexForLaptopName = /abcdefghijklmnopqrstuvyxyz!@#\$%\^&\*\(\)_\+=/i;

employedForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const nameValue = nameInput.value.trim();
  const lastnameValue = lastnameInput.value.trim();
  const teamValue = teamSelect.value.trim();
  const positionValue = positionSelect.value.trim();
  const emailValue = emailInput.value.trim();
  const phoneValue = phoneInput.value.trim();

  if (nameValue === "") {
    //სახელის ვალიდაცია
    setErrorFor(nameInput, "სავალდებულო");
  } else if (nameValue.length < 2) {
    setErrorFor(nameInput, "მინიმუმ 2 სიმბოლო");
  } else if (!nameValue.match(regexForGeorgianLetters)) {
    setErrorFor(nameInput, "მხოლოდ ქართული სიმბოლოები");
  } else {
    setSuccessFor(nameInput);
  }

  if (lastnameValue === "") {
    //გვარის ვალიდაცია
    setErrorFor(lastnameInput, "სავალდებულო");
  } else if (lastnameValue.length < 2) {
    setErrorFor(lastnameInput, "მინიმუმ 2 სიმბოლო");
  } else if (!lastnameValue.match(regexForGeorgianLetters)) {
    setErrorFor(lastnameInput, "მხოლოდ ქართული სიმბოლოები");
  } else {
    setSuccessFor(lastnameInput);
  }

  if (teamValue === "") {
    //თიმის ვალიდაცია
    setErrorFor(teamSelect, "სავალდებულო");
  } else {
    setSuccessFor(teamSelect);
  }

  if (positionValue === "") {
    //პოზიციის ვალიდაცია
    setErrorFor(positionSelect, "სავალდებულო");
  } else {
    setSuccessFor(positionSelect);
  }

  if (emailValue === "") {
    //იმეილის ვალიდაცია
    setErrorFor(email, "სავალდებულო");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "უნდა მთავრდებოდეს @redberry.ge-თი");
  } else {
    setSuccessFor(email);
  }

  if (phoneValue === "") {
    //პოზიციის ვალიდაცია
    setErrorFor(phoneInput, "სავალდებულო");
  } else {
    setSuccessFor(phoneInput);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const span = formControl.querySelector("span");
  span.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const span = formControl.querySelector("span");
  span.innerText = "";
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^[a-z0-9](\.?[a-z0-9]){1,}@redberry\.ge$/i.test(email);
}

function changePage() {
  employedForm.style.display = "none";
  laptopForm.style.display = "block";
}

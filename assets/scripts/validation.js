const employedForm = document.getElementById("form");
// const nameInput = document.getElementById("name");
// const lastnameInput = document.getElementById("last-name");
// const teamSelect = document.getElementById("team");
// const positionSelect = document.getElementById("position");
// const emailInput = document.getElementById("email");
// const phoneInput = document.getElementById("phone");

const regex =
  /[ა,ბ,გ,დ,ე,ვ,ზ,თ,ი,კ,ლ,მ,ნ,ო,პ,ჟ,რ,ს,ტ,უ,ფ,ქ,ღ,ყ,შ,ჩ,ც,ძ,წ,ჭ,ხ,ჯ,ჰ]/g;
let regexForLaptopName = /abcdefghijklmnopqrstuvyxyz!@#\$%\^&\*\(\)_\+=/i;
employedForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function isNameValid(value, input) {
  if (value === "") {
    //სახელის ვალიდაცია
    //setErrorFor(input, "სავალდებულო");
    return { message: "სავალდებულო", isValid: false };
  }

  if (value.length < 2) {
    //setErrorFor(input, "მინიმუმ 2 სიმბოლო");
    return {
      message: "მინიმუმ 2 სიმბოლო",
      isValid: false,
    };
  }

  if (!value.match(regex)) {
    // setErrorFor(input, "მხოლოდ ქართული სიმბოლოები");
    return {
      message: "მხოლოდ ქართული სიმბოლოები",
      isValid: false,
    };
  }

  return {
    isValid: true,
  };
}

function isLastNameValid(value, input) {
  if (value === "") {
    //გვარის ვალიდაცია
    // setErrorFor(input, "სავალდებულო");
    return {
      message: "სავალდებულო",
      isValid: false,
    };
  }

  if (value.length < 2) {
    //setErrorFor(input, "მინიმუმ 2 სიმბოლო");
    return {
      message: "მინიმუმ 2 სიმბოლო",
      isValid: false,
    };
  }

  if (!value.match(regex)) {
    //setErrorFor(input, "მხოლოდ ქართული სიმბოლოები");
    return {
      message: "მხოლოდ ქართული სიმბოლოები",
      isValid: false,
    };
  }

  return {
    isValid: true,
  };
}
function isTeamValid(value, input) {
  if (value === "") {
    //თიმის ვალიდაცია
    //setErrorFor(input, "სავალდებულო");
    return {
      message: "სავალდებულო",
      isValid: false,
    };
  }
  return {
    isValid: true,
  };
}

function isPositionValid(value, input) {
  if (value === "") {
    //პოზიციის ვალიდაცია
    //setErrorFor(input, "სავალდებულო");
    return {
      message: "სავალდებულო",
      isValid: false,
    };
  }
  return {
    isValid: true,
  };
}

function isEmailValid(value, input) {
  if (value === "") {
    //იმეილის ვალიდაცია
    //setErrorFor(input, "სავალდებულო");
    return {
      message: "სავალდებულო",
      isValid: false,
    };
  }
  if (!isEmail(value)) {
    //setErrorFor(input, "უნდა მთავრდებოდეს @redberry.ge-თი");
    return {
      message: "უნდა მთავრდებოდეს @redberry.ge-თი",
      isValid: false,
    };
  }
  return {
    isValid: true,
  };
}

function isPhoneValid(value, input) {
  if (value === "") {
    //პოზიციის ვალიდაცია
    // setErrorFor(input, "სავალდებულო");
    return {
      message: "სავალდებულო",
      isValid: false,
    };
  }
  return {
    isValid: true,
  };
}

laptopForm.style.display = "none";

function checkInputs() {
  const nameInput = document.getElementById("name");
  const lastnameInput = document.getElementById("last-name");
  const teamSelect = document.getElementById("team");
  const positionSelect = document.getElementById("position");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  const nameValue = nameInput.value.trim();
  const lastnameValue = lastnameInput.value.trim();
  const teamValue = teamSelect.value.trim();
  const positionValue = positionSelect.value.trim();
  const emailValue = emailInput.value.trim();
  const phoneValue = phoneInput.value.trim();

  const nameValid = isNameValid(nameValue, nameInput);
  const lastNameValid = isLastNameValid(lastnameValue, lastnameInput);
  const teamValid = isTeamValid(teamValue, teamSelect);
  const positionValid = isPositionValid(positionValue, positionSelect);
  const emailValid = isEmailValid(emailValue, emailInput);
  const phoneValid = isPhoneValid(phoneValue, phoneInput);

  console.log(
    nameValid,
    lastNameValid,
    teamValid,
    positionValid,
    emailValid,
    phoneValid
  );
  console.log("nameValid", nameValid);
  console.log("lastNameValid", lastNameValid);
  console.log("teamValid", teamValid);
  console.log("position", positionValid);
  console.log("email", emailValid);
  console.log("phone", phoneValid);

  if (nameValid.isValid) {
    setSuccessFor(nameInput);
  } else {
    setErrorFor(nameInput, nameValid.message);
  }

  if (lastNameValid.isValid) {
    setSuccessFor(lastnameInput);
  } else {
    setErrorFor(lastnameInput, lastNameValid.message);
  }

  if (teamValid.isValid) {
    setSuccessFor(teamSelect);
  } else {
    setErrorFor(teamSelect, teamValid.message);
  }

  if (positionValid.isValid) {
    setSuccessFor(positionSelect);
  } else {
    setErrorFor(positionSelect, positionValid.message);
    console.log("asd", positionValue);
  }

  if (emailValid.isValid) {
    setSuccessFor(emailInput);
  } else {
    setErrorFor(emailInput, emailValid.message);
  }

  if (phoneValid.isValid) {
    setSuccessFor(phoneInput);
  } else {
    setErrorFor(phoneInput, phoneValid.message);
  }

  if (
    nameValid.isValid &&
    lastNameValid.isValid &&
    teamValid.isValid &&
    positionValid.isValid &&
    emailValid.isValid &&
    phoneValid.isValid
  ) {
    employedForm.style.display = "none";
    laptopForm.style.display = "block";
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

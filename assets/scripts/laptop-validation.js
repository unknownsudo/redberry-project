const laptopForm = document.getElementById("laptop-form");
const laptopName = document.getElementById("laptop-name");
const laptopBrand = document.getElementById("brands");
const laptopCpu = document.getElementById("cpus");
const laptopCores = document.getElementById("cores");
const laptopThread = document.getElementById("thread");
const laptopRam = document.getElementById("ram");
//const laptopSsd = document.getElementById("ssd-radio-button");
//const laptopHdd = document.getElementById("hdd-radio-button");
const laptopPrice = document.getElementById("price");
const newConditionBut = document.getElementById("new-radio-button");
const usedConditionBut = document.getElementById("used-radio-button");
const backButton = document.getElementById("back-button");
const submitButton = document.getElementById("submit-laptop-form");
const ramTypeRadio = document.getElementsByName("ram-type");
const conditionRadio = document.getElementsByName("condition");

const nameInput = document.getElementById("name");
const lastnameInput = document.getElementById("last-name");
const teamSelect = document.getElementById("team");
const positionSelect = document.getElementById("position");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

const ramWarning = document.getElementById("ram-warning-icon");
const conditionTitle = document.querySelector(".condition-title");
const conditionWarning = document.getElementById("condition-warning-icon");
const ramTypeTitle = document.querySelector(".ram-type-title");
const dateInputValue = document.getElementById("date-input").value;

ramWarning.style.display = "none";
conditionWarning.style.display = "none";

let numbersRegex = /^\d+$/; //allowed only numbers
let EnglishRegex = /^[a-zA-Z]+$/; //allowed only english letters
let LaptopNameRegex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g; //allowed numbers english letters and symbols

laptopForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputsValidations();
});

function checkInputsValidations() {
  const laptopNameValue = laptopName.value.trim();
  const laptopBrandValue = laptopBrand.value.trim();
  const laptopCpuValue = laptopCpu.value.trim();
  const laptopCoresValue = laptopCores.value.trim();
  const laptopThreadValue = laptopThread.value.trim();
  const laptopRamValue = laptopRam.value.trim();
  // const laptopSsdValue = laptopSsd.value.trim();
  // const laptopHddValue = laptopHdd.value.trim();
  const laptopPriceValue = laptopPrice.value.trim();
  //const newConditionButValue = newConditionBut.value.trim();
  //const usedConditionButValue = usedConditionBut.value.trim();

  if (laptopNameValue === "") {
    //ლეპტოპის სახელის ვალიდაცია
    setErrorFor(laptopName, "სავალდებულო");
  } else if (!laptopNameValue.match(LaptopNameRegex)) {
    setErrorFor(
      laptopName,
      "შესაძლებელია შეიცავდეს მხოლოდ ლათინურ სიმბოლოებს, რიცხვებსა და !@#$%^&*()_+="
    );
  } else {
    setSuccessFor(laptopName);
  }

  if (laptopBrandValue === "") {
    //ლეპტოპის ბრენდის ვალიდაცია
    setErrorFor(laptopBrand, "სავალდებულო");
  } else {
    setSuccessFor(laptopBrand);
  }

  if (laptopCpuValue === "") {
    //ლეპტოპის პროცესორის ვალიდაცია
    setErrorFor(laptopCpu, "სავალდებულო");
  } else {
    setSuccessFor(laptopCpu);
  }

  if (laptopCoresValue === "") {
    //ლეპტოპის ბირთვების ვალიდაცია
    setErrorFor(laptopCores, "სავალდებულო");
  } else if (!laptopCoresValue.match(numbersRegex)) {
    setErrorFor(laptopCores, "მხოლოდ რიცხვი");
  } else {
    setSuccessFor(laptopCores);
  }

  if (laptopThreadValue === "") {
    //ლეპტოპის ნაკადების ვალიდაცია
    setErrorFor(laptopThread, "სავალდებულო");
  } else if (!laptopThreadValue.match(numbersRegex)) {
    setErrorFor(laptopThread, "მხოლოდ რიცხვი");
  } else {
    setSuccessFor(laptopThread);
  }

  if (laptopRamValue === "") {
    //ლეპტოპის ნაკადების ვალიდაცია
    setErrorFor(laptopRam, "სავალდებულო");
  } else if (!laptopRamValue.match(numbersRegex)) {
    setErrorFor(laptopRam, "მხოლოდ რიცხვი");
  } else {
    setSuccessFor(laptopRam);
  }

  if (!(ramTypeRadio[0].checked || ramTypeRadio[1].checked)) {
    ramWarning.style.display = "block";
    ramTypeTitle.style.color = "red";
  } else {
    ramWarning.style.display = "none";
    ramTypeTitle.style.color = "black";
  }

  if (!(conditionRadio[0].checked || conditionRadio[1].checked)) {
    conditionWarning.style.display = "block";
    conditionTitle.style.color = "red";
  } else {
    conditionWarning.style.display = "none";
    conditionTitle.style.color = "black";
  }

  if (laptopPriceValue === "") {
    //ლეპტოპის ნაკადების ვალიდაცია
    setErrorFor(laptopPrice, "სავალდებულო");
  } else if (!laptopPriceValue.match(numbersRegex)) {
    setErrorFor(laptopPrice, "მხოლოდ რიცხვი");
  } else {
    setSuccessFor(laptopPrice);
  }

  const formData = new FormData();
  formData.append("name", nameInput.value);
  formData.append("surname", lastnameInput.value);
  formData.append("team_id", teamSelect.value);
  formData.append("position_id", positionSelect.value);
  formData.append("phone_number", phoneInput.value);
  formData.append("email", emailInput.value);
  formData.append("token", "3dc421f43eb94ab2730109f723fc3d86");
  formData.append("laptop_name", laptopNameValue);
  formData.append(
    "laptop_image",
    document.getElementById("upload-input").files[0]
  );
  formData.append("laptop_brand_id", laptopBrandValue);
  formData.append("laptop_cpu", laptopCpu.value);
  formData.append("laptop_cpu_cores", laptopCoresValue);
  formData.append("laptop_cpu_threads", laptopThreadValue);
  formData.append("laptop_ram", laptopRamValue);
  formData.append(
    "laptop_hard_drive_type",
    ramTypeRadio[0].checked ? "HDD" : "SSD"
  );
  formData.append("laptop_state", conditionRadio[0].checked ? "new" : "used");
  formData.append("laptop_purchase_date", dateInputValue);
  formData.append("laptop_price", laptopPriceValue);
  fetch("https://pcfy.redberryinternship.ge/api/laptop/create", {
    method: "POST",

    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (!data.errors) {
        window.location.replace("/success-page");
      }
    });
}

function moveBack() {
  employedForm.style.display = "block";
  laptopForm.style.display = "none";
}

backButton.addEventListener("click", moveBack);

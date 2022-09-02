const teamSelectOptions = document.getElementById("team");
const positionSelectOptions = document.getElementById("position");
const laptopBrandSelect = document.getElementById("brands");
const laptopCpuSelect = document.getElementById("cpus");

const fetchTeamsApi = "https://pcfy.redberryinternship.ge/api/teams";
fetch(fetchTeamsApi)
  .then((response) => response.json())
  .then((data) => {
    data.data.forEach((element) => {
      teamSelectOptions.innerHTML += `
         <option value="${element.name}">${element.name}</option>
        `;
    });
  });

const fetchPositionApi = "https://pcfy.redberryinternship.ge/api/positions";
fetch(fetchPositionApi)
  .then((response) => response.json())
  .then((data) => {
    data.data.forEach((element) => {
      positionSelectOptions.innerHTML += `<option value="${element.name}">${element.name}</option>`;
    });
  });

const fetchBrandsApi = "https://pcfy.redberryinternship.ge/api/brands";
fetch(fetchBrandsApi)
  .then((response) => response.json())
  .then((data) => {
    data.data.forEach((element) => {
      laptopBrandSelect.innerHTML += `<option value="${element.name}">${element.name}</option>`;
    });
  });

const fetchCpusApi = "https://pcfy.redberryinternship.ge/api/cpus";
fetch(fetchCpusApi)
  .then((response) => response.json())
  .then((data) => {
    data.data.forEach((element) => {
      laptopCpuSelect.innerHTML += `
        <option value="${element.name}">${element.name}</option>
        `;
    });
  });

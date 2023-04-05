const apiKey = "263b38dc3f68805fefb56f2a0e9c60d5";
const loadData = async (cityName) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();
    showData(data);
  } catch (err) {
    console.log(err);
  }
};
const showData = (data) => {
  setDataById("city", data.name);
  setDataById("temperature", data.main.temp);
  setDataById("weather", data.weather[0].main);
};
const setDataById = (id, value) => {
  document.getElementById(id).innerText = value;
};

const searchBtn = document.getElementById("search-btn");
const searchField = document.getElementById("search-field");
searchBtn.addEventListener("click", function () {
  const searchValue = searchField.value;
  if (searchValue) {
    loadData(searchValue);
  } else {
    window.alert("Please Search by city Name!!!");
  }
});

searchField.addEventListener("keypress", function (e) {
  console.log(e.code);
  if (e.code === "Enter") {
    const searchField1 = document.getElementById("search-field");
    const searchValue2 = searchField1.value;
    console.log(searchValue2);
    //loadData(searchValue);
  }
});

// loadData("London");

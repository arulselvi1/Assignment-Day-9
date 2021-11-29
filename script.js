//1)Get all the countries from Asia continent /region using Filter function

var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",
  true
);
request.send();
request.onload = function () {
  var data = JSON.parse(this.response);
  let result = data.filter((element) => element["region"] == "Asia");
  console.log(result);
};

//2) Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",
  true
);
request.send();
request.onload = function () {
  var data = JSON.parse(this.response);
  let result = data.filter((element) => element["population"] < 200000);
  console.log(result);
};

//3)Print the total population of countries using reduce function

var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",
  true
);
request.send();
request.onload = function () {
  var data = JSON.parse(this.response);
  let populationArray = [];

  data.forEach((element) => {
    populationArray.push(element["population"]);
  });
  let totalPopoulation = populationArray.reduce((total, num) => {
    return total + num;
  });
  console.log(`Total population of Countries: ${totalPopoulation}`);
};

//4)Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",
  true
);
request.send();
request.onload = function () {
  var data = JSON.parse(this.response);

  data.forEach((element) => {
    if (element["currencies"][0]["code"] === "USD")
      console.log(element["name"]);
  });
};

//5)Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",
  true
);
request.send();
request.onload = function () {
  var data = JSON.parse(this.response);
  data.forEach((element) => {
    console.log(
      `name: ${element["name"]} , capital: ${element["capital"]}, flag: ${element["flag"]}`
    );
  });
};

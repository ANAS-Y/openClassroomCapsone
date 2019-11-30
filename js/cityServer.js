
const reportSection = document.getElementById('weather-report');
const cityForm = document.getElementById('city-form');
const city = "New york";//document.getElementById('city').value;

  var myRequest = new XMLHttpRequest();
  myRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e');
  myRequest.onreadystatechange = function () {
    if (myRequest.readyState === 4) {
      const response = JSON.parse(myRequest.response);
     
  reportSection.innerHTML = 'The weather in ' + response.name + ' is ' + response.weather[0].main + '.';
      console.log(myRequest.responseText);
    }
    else{
dreportSection.innerHTML = "Not Connected";
    }
  };

  function sendTheRequest() {
    myRequest.send();
    document.getElementById('search-btn').style.display = 'none';
    document.getElementById('city-form').style.display = 'none';
  }
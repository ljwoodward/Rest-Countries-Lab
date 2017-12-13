const app = function () {
  const url = 'https://restcountries.eu/rest/v2/all';

  const button = document.querySelector('#show-countries');
  button.addEventListener('click', function(thing) {
    makeRequest(url, requestComplete)
  });
}

const makeRequest = function(url, callback) {
  const request = new XMLHttpRequest();
  // call open to get the url (kind of like a prepare stage):
  request.open('GET', url);
  // sending the request message:
  request.send();
  request.addEventListener('load', callback);
}

const requestComplete = function() {
  if(this.status !== 200) return;
  // console.log(this); to check that the status is 200!
  const jsonString = this.responseText;
  const countries = JSON.parse(jsonString);
  // console.log(countries);
  populateList(countries);
}

const populateList = function(countries) {
  const select = document.querySelector('select');
  countries.forEach(function(country) {
    const option = document.createElement('option');
    option.innerText = country.name;
    select.appendChild(option);
  });
}




document.addEventListener('DOMContentLoaded', app);

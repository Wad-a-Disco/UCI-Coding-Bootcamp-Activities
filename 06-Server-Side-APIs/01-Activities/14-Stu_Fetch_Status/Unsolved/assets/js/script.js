var badRequestUrl = 'https://api.github.com/orgs/nodejs/oreps?per_page=5';

var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      if (response.status === 404) {
        responseText.textContent = "The requested resource could not be found.";
      } else {
        return response.json();
      }
    })
    .then(function (data) {
      // Handle successful response here if needed
    })
    .catch(function (error) {
      console.error('Error:', error);
      // Handle other types of errors here if needed
    });
}

getApi(badRequestUrl);

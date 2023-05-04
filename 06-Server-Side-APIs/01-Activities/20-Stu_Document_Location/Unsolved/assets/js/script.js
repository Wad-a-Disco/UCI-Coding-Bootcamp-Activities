// The URL of the API endpoint we want to retrieve data from. This endpoint
// does not exist, so it will return a 404 error.
var badRequestUrl = 'https://api.github.com/unicorns';

// The URL of the 404 page we want to redirect to if the API request fails.
var redirectUrl = './404.html';

// We make a `fetch()` request to the bad URL, and use the `then()` method to
// handle the response. The response is passed as an argument to the callback
// function.
fetch(badRequestUrl).then(function (response) {
  // We use a conditional to check the response status. If the status equals
  // 404, we redirect to the 404 page using `window.location.href`.
  if (response.status === 404) {
    window.location.href = redirectUrl;
  }
});

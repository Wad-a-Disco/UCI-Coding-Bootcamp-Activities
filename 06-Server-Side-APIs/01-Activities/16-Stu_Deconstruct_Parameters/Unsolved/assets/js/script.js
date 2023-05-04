fetch(
  // The URL of the API endpoint we want to retrieve data from. This endpoint
  // returns a list of issues for the Node.js repository on GitHub. We're
  // requesting the 10 most recent open issues, sorted by creation date in
  // descending order.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  // The `fetch()` function returns a Promise that resolves to the response from
  // the server. We use the `then()` method to handle the response, which is
  // passed as an argument to the first callback function.
  .then(function (response) {
    // We call the `json()` method on the response object to parse the response
    // as JSON. This also returns a Promise.
    return response.json();
  })
  // We chain another `then()` method to handle the parsed data. In this case,
  // we simply log the data to the console using `console.log()`.
  .then(function (data) {
    console.log(data);
  });

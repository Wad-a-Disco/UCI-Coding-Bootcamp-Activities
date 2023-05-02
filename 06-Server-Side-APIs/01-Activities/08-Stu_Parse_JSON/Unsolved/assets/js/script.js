var requestUrl = 'https://api.github.com/repos/twitter/chill/issues?per_page=5';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Github Repo Issues \n----------');
    for (var i = 0; i < data.length; i++) {
      console.log('Issue URL: ' + data[i].html_url);
      console.log('Username: ' + data[i].user.login);
    }
  });


function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';
  var userContainer = document.getElementById('users');
  userContainer.innerHTML = ''; // clear previous results

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Loop through the data and generate HTML for each user
      data.forEach(function(user) {
        var userLink = document.createElement('a');
        userLink.href = user.html_url;
        userLink.textContent = user.login;

        var listItem = document.createElement('li');
        listItem.appendChild(userLink);

        userContainer.appendChild(listItem);
      });
    })
    .catch(function (error) {
      console.error(error);
    });
}


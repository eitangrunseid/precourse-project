const GITHUB_URL = "https://api.github.com/users/eitangrunseid";

const profileName = document.getElementById('my-name');

function getApi () {
  fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    profileName.innerText = data.login;
  });
}
getApi();








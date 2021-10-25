const socialMedia = {
  instagram: "nuunes_joao",
  youtube: "maykbrito",
  facebook: "maykbrito",
  twitter: "maykbrito",
  github: "SchafNunes",
};

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    li.children[0].href = `https://www.${social}.com/${socialMedia[social]}`;
  }
}
changeSocialMedia();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent =data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos();


const LinksSocialMedia = {
  github: 'wesley-silv',
  youtube: 'UCnX2orosZve9aaZTw6nONrQ',
  facebook: 'wesleysilvajapao',
  instagram: 'wesleysilvacon',
  linkedin: 'wesley-silva'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    // Esta const dentro do for existe apenas enquanto o for existir, ou seja, não existe fora do for. chamada de variável de escopo.
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  // Example of link to API: https://api.github.com/users/wesley-silv
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.src = data.login
    })
}
getGitHubProfileInfos()

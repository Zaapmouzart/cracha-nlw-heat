 const LinksSocialMedia = {
    github: "zaapmouzart",
    instagram: "mouzartnasc",
    facebook: "leonardo.mouzart"
}


 changeSocialMediaLinks()

 function getGitHubProfilInfos(){

    const url = `https://api.github.com/users/${LinksSocialMedia.github}`
   
    fetch(url)
    .then(response => response.json())
    .then(data => {
        
        userBio.textContent = data.bio
        userName.textContent = data.name
        userLink.href = data.html_url 
        userLogin.textContent = data.login
        userImage.img = data.avatar_url
      

    })

 }
 getGitHubProfilInfos()
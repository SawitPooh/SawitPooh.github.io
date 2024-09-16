fetch("https://api.github.com/users/SawitPooh")
.then((Response) => Response.json())
.then(data => {change_img(data.avatar_url), change_name(data.login)});
function change_img(newsrc) {
    document.getElementById("avatar-img").src = newsrc;
  }
  function change_name(newsrc) {
    var nameEl = document.getElementsByTagName("a");
    for (var i = 0 ; i < nameEl.length ; i++){
       nameEl[i].innerHTML =  newsrc;
    }
  }


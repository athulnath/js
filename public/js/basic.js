var heading = document.querySelector('h1');
heading.textContent = "Hey "+ _getGuest() + "!, welcome to JS";
heading.onclick = function() {
    alert('hey, welcome again');
}


var imageBaseUrl = "http://imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/";
var image = document.querySelector("img");
image.style.cursor = "pointer";

image.onclick = function() {
    if (image.getAttribute('src') == imageBaseUrl + "img_01.jpg") {
        image.src = imageBaseUrl + "img_02.jpg";
    } else {
        image.src = imageBaseUrl + "img_01.jpg"
    }
}

var button = document.getElementById('btn-guest-reset');
console.log(button);
button.onclick = function() {
    __resetGuestUser();
}



//////// guest user handling ////////////
function _getGuest() {
    var guestUser = localStorage.getItem('guest');
    guestUser = JSON.parse(guestUser);
    if(guestUser) {
        return guestUser.username;
    }

    return __resetGuestUser();
}

function __resetGuestUser() {
    var username = prompt('Please enter guest username');
    guestUser = {};
    guestUser.username = username;
    guestUser.created_at = Date();
    localStorage.setItem('guest', JSON.stringify(guestUser));
    heading.textContent = "Hey "+ _getGuest() + "!, welcome to JS";
    return username;
}
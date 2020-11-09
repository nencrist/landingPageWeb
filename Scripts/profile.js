const profileBtn = document.querySelector('.auth__profile');
const profileInfo = document.querySelector('.profile');
const authSignOut = document.querySelector('.profile__signOut')

profileBtn.addEventListener('click', function(event) {
    event.preventDefault();
    profileInfo.classList.remove('hidden');

});

authSignOut.addEventListener('click', function(event) {
    event.preventDefault();
    firebase.auth().signOut();
    profileInfo.classList.add('hidden');

});
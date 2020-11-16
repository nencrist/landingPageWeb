const profileBtn = document.querySelector('.auth__profile');
const profileInfo = document.querySelector('.profile');
const profileName = document.querySelector('.profile__name');
const authSignOut = document.querySelector('.profile__signOut')

profileBtn.addEventListener('click', function(event) {
    event.preventDefault();
    profileInfo.classList.remove('hidden');

});

firebase.auth().onAuthStateChanged(function(user) {

    //usuario ya inicio sesion o ya se registro
    if(user) {

        var db = firebase.firestore();
        const usersRef = db.collection("users");

        usersRef.doc(user.uid).get().then(function (doc){
            if(doc.exists) {
                const data = doc.data();
                profileName.innerText = data.name;
            }

        });

    }
    
  });

authSignOut.addEventListener('click', function(event) {
    event.preventDefault();
    firebase.auth().signOut();
    profileInfo.classList.add('hidden');
    window.localStorage.removeItem('userId');

});
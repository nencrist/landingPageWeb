const authWithout = document.querySelector('.auth__without');
const authWith = document.querySelector('.auth__with');
const authProfileName = document.querySelector('.auth__profile p');


firebase.auth().onAuthStateChanged(function(user) {
    //usuario ya inicio sesion o ya se registro
    if(user) {
        authWith.classList.remove('hidden');
        authWithout.classList.add('hidden');

        var db = firebase.firestore();
        const usersRef = db.collection("users");

        usersRef.doc(user.uid).get().then(function (doc){
            if(doc.exists) {
                const data = doc.data();
                authProfileName.innerText = data.name;
            }
        });

    }else {
    //el usuario no ha iniciado sesion o cerro la sesion

        authWith.classList.add('hidden');
        authWithout.classList.remove('hidden');

    }
  });
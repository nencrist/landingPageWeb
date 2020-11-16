const authWithout = document.querySelector('.auth__without');
const authWith = document.querySelector('.auth__with');
const authProfileName = document.querySelector('.auth__profile p');
const searchIcon = document.querySelector('.mainHeader__searchIcon');


firebase.auth().onAuthStateChanged(function(user) {

    //usuario ya inicio sesion o ya se registro
    if(user) {
        authWith.classList.remove('hidden');
        authWithout.classList.add('hidden');

        var db = firebase.firestore();
        const usersRef = db.collection("users");

        searchIcon.classList.add('move');

        usersRef.doc(user.uid).get().then(function (doc){
            if(doc.exists) {
                const data = doc.data();
                authProfileName.innerText = data.name;

                const showAdmin = document.querySelectorAll('.showAdmin');
                const addToCarBtn = document.querySelector('.product__addBtn');
                if(data.admin){
                    showAdmin.forEach(function (elem){
                        elem.classList.remove('hidden');

                    });
                        addToCarBtn.classList.add('hidden');
                }
            }

        });

    }else {
    //el usuario no ha iniciado sesion o cerro la sesion

        authWith.classList.add('hidden');
        authWithout.classList.remove('hidden');

        searchIcon.classList.remove('move');
    }

    window.localStorage.setItem("userId", user.uid);
  });
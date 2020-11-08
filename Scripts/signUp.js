var db = firebase.firestore();
const usersRef = db.collection("users");

const signUp = document.querySelector('.signUp')

signUp.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = signUp.name.value;
    const email = signUp.email.value;
    const passWord = signUp.passWord.value;

    firebase.auth().createUserWithEmailAndPassword(email, passWord)
    .then(function (credentials) {

        const uid = credentials.user.uid;
        usersRef.doc(uid).set({
            name: name,
            email: email,
        })

        .then(function () {
            window.location.href = 'productos.html';
        })
    })
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        signUp.querySelector('.form__error').classList.remove('hidden');
        // ...
      });

});


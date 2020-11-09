
const login = document.querySelector('.login');

    login.addEventListener('submit', function (event) {
        event.preventDefault();
    
        const email = login.email.value;
        const passWord = login.passWord.value;
    
        firebase.auth().signInWithEmailAndPassword(email, passWord)
        .then(function () {
    
            window.location.href = 'productos.html';
        })
        
        .catch(function(error) {
            // Handle Errors here.
            console.log(error)
    
            login.querySelector('.form__error').classList.remove('hidden');
            // ...
          });
    
    });



var imagePath = '';

var db = firebase.firestore();
const productsRef = db.collection("products");

const form = document.querySelector('.form');

  form.img.addEventListener('change', function(){

    var storageRef = firebase.storage().ref();
    var newImageRef = storageRef.child(`products/${Math.floor(Math.random()*13418623)}.png`);

    var file = form.img.files[0] // use the Blob or File API
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e) {
      form.querySelector('.form__previewImg').src = e.target.result;
    }
    newImageRef.put(file).then(function(snapshot) {
    console.log(snapshot);
    console.log('Uploaded a blob or file!');
    imagePath = snapshot.metadata.fullPath;
});

});

//aqui agregamos productos a la base de datos

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const newProduct = {
      name: form.name.value,
      price: form.price.value,
      img: imagePath,
      details: form.details.value,
      color: form.color.value, 
    };

    console.log(newProduct);

    productsRef.add(newProduct)
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

  });

form.addEventListener('reset', function (event){
  event.preventDefault();
  location.href = './adminProducts.html';
});
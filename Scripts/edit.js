var imagePath = '';
var productInfo;

var db = firebase.firestore();
const usersRef = db.collection("users");
const productsRef = db.collection("products");
var storageRef = firebase.storage().ref();

const form = document.querySelector('.form');

const productId = location.search.replace('?', '');

productsRef.doc(productId).get().then(function (snapshot) {
 
    productInfo = snapshot.data();
    form.name.value = productInfo.name;
    form.price.value = productInfo.price;
    form.color.value = productInfo.color;
    form.details.value = productInfo.details;

    if(productInfo.img){
        storageRef.child(productInfo.img).getDownloadURL().then(function(url) {

          // Or inserted into an <img> element:
          document.querySelector('.form__previewImg').setAttribute('src', url);
         
        }).catch(function(error) {
          // Handle any errors
        });
      }

    imagePath = productInfo.img;
      
});


  form.img.addEventListener('change', function(){

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

    productsRef.doc(productId).set(newProduct)
    .then(function(docRef) {
        alert("Se editó correctamente");
        //console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
       console.error("Error adding document: ", error);
    });

  });

form.addEventListener('reset', function (event){
  event.preventDefault();
  location.href = 'productos.html';
});
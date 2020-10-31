
//aqui agregamos productos a la base de datos

const form = document.querySelector('.form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const newProduct = {
      name: form.name.value,
      price: form.price.value,
      img: form.img.value
    };

    console.log(newProduct);

    db.collection("products").add(newProduct)
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

  });
var db = firebase.firestore();
const usersRef = db.collection("users");
var userId = localStorage.getItem('userId');
const orderRef = db.collection("orders");
const carRef = usersRef.doc(userId).collection('shoppingCar');
const total = localStorage.getItem('total');
const productId = localStorage.getItem('productId');
var products = [];

const form = document.querySelector('.form');

carRef.onSnapshot(function(querySnapshot){
    querySnapshot.forEach(function(elem){
        productInfo = elem.data();
        productInfo.id = elem.id;
        products.push(productInfo.name);
    });
    
});



//aqui agregamos productos a la base de datos

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const newPedido = {
      name: form.name.value,
      adress: form.adress.value,
      payment: form.payment.value,
      products: products,
      total: total,

    };

    console.log(newPedido);

    orderRef.add(newPedido)
    .then(function(docRef) {
      alert("El pedido se hizo correctamente")
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

  });

form.addEventListener('reset', function (event){
  event.preventDefault();
  location.href = './productos.html';
});
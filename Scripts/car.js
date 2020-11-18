
  var db = firebase.firestore();
  const usersRef = db.collection("users");
  var storageRef = firebase.storage().ref();
  var envio = 6000;
  var total;
  var sumTotal = 0;

  var userId = localStorage.getItem('userId');
  const carRef = usersRef.doc(userId).collection('shoppingCar');

  const carList = document.querySelector('.car__list');
  const subTotal = document.querySelector('.subTotal');
  const totalSum = document.querySelector('.totalSum');
  const goToPayBtn = document.querySelector('.btn');

   //creacion de los productos a nivel visual
  function renderProducts (list) {
    carList.innerHTML = '';
    list.forEach(function (elem) {
      const newProduct =  document.createElement('article');
      newProduct.classList.add('carProduct');

      const url = `detalle.html?${elem.id}`;
      //newProduct.setAttribute('href', url);

      window.localStorage.setItem('productId', elem.id);
      

      total = envio + parseInt(elem.price);
       
      newProduct.innerHTML = `
      <a href="${url}"><img class="carProduct__img" src="" alt=""></a>
      <p class="carProduct__text">${elem.name}</p>
      <p class="carProduct__text">$ ${envio}</p>
      <p class="carProduct__price">$ ${elem.price}</p>
      <p class="carProduct__price carProduct__price--total">$ ${total}</p>
      <button class="carProduct__delete"> Eliminar</button>
      `;
       sumTotal += total;
       subTotal.innerHTML = '$' + ' ' + sumTotal;
       totalSum.innerText = '$' + ' ' + sumTotal;
       window.localStorage.setItem('total', sumTotal);
    
      if(elem.img){
        storageRef.child(elem.img).getDownloadURL().then(function(url) {

          // Or inserted into an <img> element:
          var img = newProduct.querySelector('img');
          img.src = url;
        }).catch(function(error) {
          // Handle any errors
        });
      }

      

      const deleteBtn = newProduct.querySelector('.carProduct__delete');

      deleteBtn.addEventListener('click', function(){
        carRef.doc(elem.id).delete().then(function(){
          getProducts();
          location.reload();
          alert("Producto eliminado correctamente");
        }).catch(function(error){
          alert("Error al eliminar documento")
          console.error("Error removing document: ", error);
        });
    });


      carList.appendChild(newProduct);
    });


  }

//aqui llamo los productos de la base de datos

  function getProducts() {
    carRef.onSnapshot(function (querySnapshot) {
      var carProducts = [];
      querySnapshot.forEach((doc) => {
          const obj = doc.data();
          obj.id = doc.id;
          carProducts.push(obj);
          console.log(`${doc.id} => ${doc.data()}`);
      });
  
      renderProducts(carProducts);

  });
  }

  
getProducts();

goToPayBtn.addEventListener('click', function(event){
  event.preventDefault();
  window.location.href = 'checkOut.html';
});

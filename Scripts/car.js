
  var db = firebase.firestore();
  const usersRef = db.collection("users");
  var storageRef = firebase.storage().ref();

  var userId = localStorage.getItem('userId')
  const carRef = usersRef.doc(userId).collection('shoppingCar');

  const carList = document.querySelector('.car__list');

   //creacion de los productos a nivel visual
  function renderProducts (list) {
    carList.innerHTML = '';
    list.forEach(function (elem) {
      const newProduct =  document.createElement('article');
      newProduct.classList.add('carProduct');

      const url = `detalle.html?${elem.id}`;
      //newProduct.setAttribute('href', url);
       
      newProduct.innerHTML = `
      <a href="${url}"><img class="carProduct__img" src="" alt=""></a>
      <p class="carProduct__name">${elem.name}</p>
      <p class="carProduct__price">$ ${elem.price}</p>
      <button class="carProduct__delete"> Eliminar</button>
      `;
    
      if(elem.img){
        storageRef.child(elem.img).getDownloadURL().then(function(url) {

          // Or inserted into an <img> element:
          var img = newProduct.querySelector('img');
          img.src = url;
        }).catch(function(error) {
          // Handle any errors
        });
      }

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

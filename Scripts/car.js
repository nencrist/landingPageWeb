
  var db = firebase.firestore();
  const usersRef = db.collection("users");
  const carRef = usersRef.doc(userInfo.uid).collection('shoppingCar');
  var storageRef = firebase.storage().ref();


  const productsList = document.querySelector('.productsList');

   //creacion de los productos a nivel visual
  function renderProducts (list) {
    productsList.innerHTML = '';
    list.forEach(function (elem) {
      const newProduct =  document.createElement('article');
      newProduct.classList.add('product');

      const url = `detalle.html?${elem.id}`;
      //newProduct.setAttribute('href', url);
       
      newProduct.innerHTML = `
      <a href="${url}"><img class="product__img" src="" alt="">
      <div class="product__info">
          <p class="product__name">${elem.name}</p>
          <p class="product__price">$ ${elem.price}</p>
      </div></a>
      <button class="product__addBtn"> Agregar a carrito </button>
      <button class="product__adminBtn hidden showAdmin"> Editar </button>
      <button class="product__adminBtn hidden showAdmin"> Eliminar</button>
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

      const addBtn = newProduct.querySelector('.product__addBtn');

      addBtn.addEventListener('click', function(event){
        event.preventDefault();
        
        if(userInfo){
          usersRef.doc(userInfo.uid).collection('shoppingCar').doc(elem.id).set(
            {
              name: elem.name,
              price: elem.price,
              img: elem.img,
            }

          ).then(function(){
            alert('agregado');
          }).catch(function(error){
            console.log(error.message);
          })

        } else {
          alert('No has iniciado sesión')
        }
      });

      productsList.appendChild(newProduct);
    });


  }

//aqui llamo los productos de la base de datos

function getProducts() {
  productsRef.onSnapshot(function (querySnapshot) {
    const products = [];
    querySnapshot.forEach((doc) => {
        const obj = doc.data();
        obj.id = doc.id;
        products.push(obj);
        console.log(`${doc.id} => ${doc.data()}`);
    });

    renderProducts(products);
});
}
  
getProducts();

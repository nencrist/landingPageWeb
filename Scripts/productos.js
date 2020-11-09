
  var db = firebase.firestore();
  const productsRef = db.collection("products");
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
      <a href="${url}"><img class="product__img" src="${elem.img}" alt="">
      <div class="product__info">
          <p class="product__name">${elem.name}</p>
          <p class="product__price">$ ${elem.price}</p>
      </div></a>
      <img class="product__img__addBtn" src="./Images/addBtn.png" alt="">
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
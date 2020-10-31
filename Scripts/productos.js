
  const productsList = document.querySelector('.productsList');

   //creacion de los productos a nivel visual
  function renderProducts (list) {
    productsList.innerHTML = '';
    list.forEach(function (elem) {
      const newProduct =  document.createElement('article');
      newProduct.classList.add('product');
       
      newProduct.innerHTML = `
      <img class="product__img" src="${elem.img}" alt="">
      <div class="product__info">
          <p class="title">${elem.name}</p>
          <p class="product__price">$ ${elem.price}</p>
      </div>
      `;
    
      productsList.appendChild(newProduct);
    });
  }

var products = [];

//aqui llamo los productos de la base de datos

function getProducts() {
  db.collection("products").get().then((querySnapshot) => {
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

  var db = firebase.firestore();
  const productsRef = db.collection("products");
  const usersRef = db.collection("users");
  var storageRef = firebase.storage().ref();
  var userId = localStorage.getItem('userId');
 


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
      <button class="product__editBtn hidden showAdmin"> Editar </button>
      <button class="product__deleteBtn hidden showAdmin"> Eliminar</button>
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
        
          usersRef.doc(userId).collection('shoppingCar').doc(elem.id).set(
            {
              name: elem.name,
              price: elem.price,
              img: elem.img,
            }

          )
      });

      const deleteBtn = newProduct.querySelector('.product__deleteBtn');

        deleteBtn.addEventListener('click', function(){
            productsRef.doc(elem.id).delete().then(function(){
              getProducts();
              alert("Producto eliminado correctamente");
            }).catch(function(error){
              alert("Error al eliminar documento")
              console.error("Error removing document: ", error);
            });
        });

        const editBtn = newProduct.querySelector('.product__editBtn');

        editBtn.addEventListener('click', function(){

          const urlEdit = `editProduct.html?${elem.id}`;
          window.location.href = urlEdit;
            
        });

      productsList.appendChild(newProduct);
    });


  }

//aqui llamo los productos de la base de datos
let itemsList = [];

function getProducts() {
  productsRef.onSnapshot(function (querySnapshot) {
    itemsList = [];
    querySnapshot.forEach((doc) => {
        const obj = doc.data();
        obj.id = doc.id;
        itemsList.push(obj);
        console.log(`${doc.id} => ${doc.data()}`);
    });

    renderProducts(itemsList);
});
}
 
getProducts();

const filterForm = document.querySelector('.filterForm');
filterForm.addEventListener('change', function(){
  let copy = itemsList.slice();

  const order = filterForm.order.value;

  switch(order){
    case "price__asc":
      copy.sort(function(a, b){
        return a.price - b.price;
      });
    break;
    case "price__desc":
      copy.sort(function(a, b){
        return b.price - a.price;
      });
    break;
  }

  const typeFilter = filterForm.type.value;

  if(typeFilter != ''){

    copy = copy.filter(function(elem){

      if(elem.name.includes(typeFilter)){
        return true;
      }
      return false;
  
    });
      
  }

  const colorSelect = filterForm.colorSelect.value;

  
  if(colorSelect != ''){

    copy = copy.filter(function(elem){

      if(elem.color.includes(colorSelect)){
        return true;
      }
      return false;
  
    });
      
  }


  renderProducts(copy);

});

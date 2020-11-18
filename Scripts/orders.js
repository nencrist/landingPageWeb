
  var db = firebase.firestore();
  const usersRef = db.collection("users");
 const ordersRef = db.collection("orders");
  
  var userId = localStorage.getItem('userId');

  const ordersList = document.querySelector('.order__list');

   //creacion de los productos a nivel visual
  function renderProducts (list) {
    ordersList.innerHTML = '';
    list.forEach(function (elem) {
      const newOrder =  document.createElement('article');
      newOrder.classList.add('orderItem');
       
      newOrder.innerHTML = `
      <p class="orderItem__text">${elem.name}</p>
      <p class="orderItem__text orderItem__text--adress">${elem.adress}</p>
      <p class="orderItem__product">${elem.products}</p>
      <p class="orderItem__price">$${elem.total}</p>
      `;

      ordersList.appendChild(newOrder);
    });

  }

//aqui llamo los productos de la base de datos

  function getProducts() {
    ordersRef.onSnapshot(function (querySnapshot) {
      var orderItems = [];
      querySnapshot.forEach((doc) => {
          const obj = doc.data();
          obj.id = doc.id;
          orderItems.push(obj);
          console.log(`${doc.id} => ${doc.data()}`);
      });
  
      renderProducts(orderItems);

  });
  }
         
     getProducts();
  




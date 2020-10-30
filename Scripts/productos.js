var firebaseConfig = {
    apiKey: "AIzaSyAw7pqdnaUv9m4s6wDwzOFPge2p9_WCKvw",
    authDomain: "visionarytrend-2c29b.firebaseapp.com",
    databaseURL: "https://visionarytrend-2c29b.firebaseio.com",
    projectId: "visionarytrend-2c29b",
    storageBucket: "visionarytrend-2c29b.appspot.com",
    messagingSenderId: "1084439854728",
    appId: "1:1084439854728:web:92ad4fa30081a04daae93d",
    measurementId: "G-TFQYVBLDHJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const products = [
   {
    name: 'V-Red', 
    price: 45000,
    img: './Images/persoCapRed.png'
    }

  ];

  const productsList = document.querySelector('.productsList');

  function renderProducts (list){
    //creacion de los productos a nivel visual
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

  //render inicial de todos los productos
  renderProducts(products);
  
  
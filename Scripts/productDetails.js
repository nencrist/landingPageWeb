var db = firebase.firestore();
const productsRef = db.collection("products");
var storageRef = firebase.storage().ref();
const usersRef = db.collection("users");
const addToCarBtn = document.querySelector('.btn');
var productInfo;
var userId = localStorage.getItem('userId');

window.addEventListener('load', function () {

const productId = location.search.replace('?', '');

productsRef.doc(productId).get().then(function (snapshot) {
 
    productInfo = snapshot.data();
    const name = document.querySelector('.normalText');
    name.innerText = productInfo.name;

    
    document.querySelector('.title').innerText = productInfo.price;
    document.querySelector('.product__details').innerHTML = productInfo.details;

    if(productInfo.img){
        storageRef.child(productInfo.img).getDownloadURL().then(function(url) {

          // Or inserted into an <img> element:
          document.querySelector('.product__img').setAttribute('src', url);
         
        }).catch(function(error) {
          // Handle any errors
        });
      }
      
});

addToCarBtn.addEventListener('click', function (event){
  event.preventDefault();
        
      
        usersRef.doc(userId).collection('shoppingCar').doc(productId).set(
            {
              name: productInfo.name,
              price: productInfo.price,
              img: productInfo.img,
            }

          );
  
});

});




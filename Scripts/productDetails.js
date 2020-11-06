window.addEventListener('load', function () {

const productId = location.search.replace('?', '');

productsRef.doc(productId).get().then(function (snapshot) {
 
    const productInfo = snapshot.data();
    const name = document.querySelector('.normalText');
    name.innerText = productInfo.name;

    document.querySelector('.product__img').setAttribute('src', productInfo.img);
    document.querySelector('.title').innerText = productInfo.price;

});

});
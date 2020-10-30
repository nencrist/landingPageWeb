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
  const newProduct =   document.createElement('article');
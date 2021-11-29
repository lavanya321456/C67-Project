import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyCRRebbgoWZszxBNs8Q724PYZ86ZC894bY",
        authDomain: "c67-project-5e591.firebaseapp.com",
        projectId: "c67-project-5e591",
        storageBucket: "c67-project-5e591.appspot.com",
        messagingSenderId: "855347899856",
        appId: "1:855347899856:web:96318d92f46c6bb2e1ddd5"
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
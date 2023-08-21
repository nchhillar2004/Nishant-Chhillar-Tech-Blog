// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDQhNgFwH7xPYksDsBpBnH5h2q7CFdv5So",
    authDomain: "nishant-chhillar.firebaseapp.com",
    projectId: "nishant-chhillar",
    storageBucket: "nishant-chhillar.appspot.com",
    messagingSenderId: "229239526182",
    appId: "1:229239526182:web:13442faf4190243dc7a7e7",
    measurementId: "G-6V6GPQN9KX"
};
  
firebase.initializeApp(firebaseConfig);
  
// Signup Form
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var button = document.getElementById("myButton");
    var email = document.getElementById('floatingInput').value;
    var password = document.getElementById('floatingPassword').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function() {
        // Update the user's display name with full name
        var user = firebase.auth().currentUser;
        user.updateProfile({
        }).then(function() {
          console.log('User signed up successfully');
          button.innerHTML = "Subscribed";
          button.disabled = true;

        }).catch(function(error) {
          console.error('Error updating display name:', error);
        });
      })
      .catch(function(error) {
        console.error('Error signing up:', error);
      });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function() {
        button.innerHTML = "Already Subscribed";
        button.disabled = true;
      })
  });
  
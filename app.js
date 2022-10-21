const firebaseConfig = {
    apiKey: "AIzaSyByacfQEwWUfONYzMG2xumweIxYPpx5Pas",
    authDomain: "contactform-a9fd4.firebaseapp.com",
    databaseURL: "https://contactform-a9fd4-default-rtdb.firebaseio.com",
    projectId: "contactform-a9fd4",
    storageBucket: "contactform-a9fd4.appspot.com",
    messagingSenderId: "825009593719",
    appId: "1:825009593719:web:57d15e3f679075b946d572"
  };

// initialize firebase 
  firebase.initializeApp(firebaseConfig);

// reference your database

 var contactFormDB = firebase.database().ref('contactForm');

 document.getElementById('contactForm').addEventListener('submit', submitForm);

 function submitForm(e){
   e.preventDefault();
   var name = getElementVal('name')
   var email = getElementVal('email') 
   var subject = getElementVal('subject')
   var message = getElementVal('message')
   
saveMessages(name , email, subject, message)
// enable alert
document.querySelector('.alert').style.display = 'block';
// remove the alert
 setTimeout(() => {
    document.querySelector('.alert').style.display = 'none';
 }, 3000);

 // reset the form 
 document.getElementById('contactForm').reset();
 
}

  const saveMessages = (name, email, subject, message) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
        name : name,
        email : email,
        subject : subject,
        message : message
    })
}

 const getElementVal = (id) => {
   return document.getElementById(id).value; 
 }

 // enable alert


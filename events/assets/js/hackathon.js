



var config = {
    apiKey: "AIzaSyDfb2QT1AG3-2yqiiUo1mkOn170QRtK92A",
    authDomain: "ecell-1b04d.firebaseapp.com",
    projectId: "ecell-1b04d",
    storageBucket: "ecell-1b04d.appspot.com",
    messagingSenderId: "324153281020",
    appId: "1:324153281020:web:0d3d83bdb18d6e0f534a79",
    measurementId: "G-BW02JFHNT6",
    databaseURL: "https://ecell-1b04d-default-rtdb.firebaseio.com/"
};
firebase.initializeApp(config);

//Reference for form collection(3)
let formMessage = firebase.database().ref('Hackathon');

//listen for submit event//(1)
document
    .getElementById('registration')
    .addEventListener('submit', formSubmit);


//Submit form(1.2)
function formSubmit(e) {
    console.log("submit",e);
    e.preventDefault();
    // Get Values from the DOM
    let data =
{
    Team: document.getElementById('teamname').value,
    name1: document.getElementById('name1').value,
    email1: document.getElementById('email1').value,
    contact1: document.getElementById('contact1').value,
    github1: document.getElementById('github1').value,
    profile1: document.getElementById('profile1').value,
    name2: document.getElementById('name2').value,
    email2: document.getElementById('email2').value,
    contact2: document.getElementById('contact2').value,
    github2: document.getElementById('github2').value,
    profile2: document.getElementById('profile2').value,
    
    name3: document.getElementById('name3').value,
    email3: document.getElementById('email3').value,
    contact3: document.getElementById('contact3').value,
    github3: document.getElementById('github3').value,
    profile3: document.getElementById('profile3').value,
    name4: document.getElementById('name4').value,
    email4: document.getElementById('email4').value,
    contact4: document.getElementById('contact4').value,
    github4: document.getElementById('github4').value,
    profile4: document.getElementById('profile4').value,
    institute: document.getElementById('Institue').value
   
}
    console.log(data);







    //send message values
    sendMessage(data);

    //Show Alert Message(5)
    document.querySelector('.alert').style.display = 'block';

    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 7000);

    //Form Reset After Submission(7)
    document.getElementById('registrationform').reset();
}


//Send Message to Firebase(4)

function sendMessage(data) {
    let newFormMessage = formMessage.push();

    // alert("submit")
    newFormMessage.set(data);
    // alert("your application submited");

    swal({title: "Good job", text: "Registered successfully!", type: 
"success"}).then(function(){ 
   location.reload();
   }
);
    // location.reload();
    // displayMessage();



    // // data to be sent to the POST request
    // let _data = {
    //     email: email,
    //     name: name,
    //     vertical: vertical1,
    //     vertical2: vertical2,
    //     contact: contact

    // }

    // fetch('20.24.196.91:8080', {
    //     method: "POST",
    //     body: JSON.stringify(_data),
    //     headers: { "Content-type": "application/json; charset=UTF-8" }
    // })
    //     .then(response => response.text())
    //     .then(json => { console.log(json); window.location.href = "index.html"; });




}


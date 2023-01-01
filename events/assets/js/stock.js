function manitclick(){
    document.getElementById("non-manit").style.display = "none";
    document.getElementById("manit").style.display = "block";
}
function nonmanitclick(){
    document.getElementById("non-manit").style.display = "block";
    document.getElementById("manit").style.display = "none";
}
let url=""
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



 async function uploadFile(e){
    alert("dsf")

    e.preventDefault();

      
    // Created a Storage Reference with root dir
    var storageRef = firebase.storage().ref();
    // Get the file from DOM
    var file = document.getElementById("manitid").files[0];
    console.log(file);
    
    //dynamically set reference to the file name
    var thisRef = storageRef.child(file.name);

    //put request upload file to firebase storage
    thisRef.put(file).then(function(snapshot) {
       alert("File Uploaded")
       console.log('Uploaded a blob or file!');
    });
    thisRef.on('state_changed',function(snapshot) {
 
 
    }, function(error) {
    
   }, function() {
    // Uploaded completed successfully, now we can get the download URL
    thisRef.snapshot.ref.getDownloadURL().then(function(downloadURL) {
   
      alert(downloadURL)
     });
    });
    
  }


//Reference for form collection(3)
let formMessage = firebase.database().ref('stock-manit');

//listen for submit event//(1)
document
    .getElementById('manit')
    .addEventListener('submit', formSubmit);
    document
    .getElementById('upload')
    .addEventListener('submit', uploadFile);


//Submit form(1.2)
async function  formSubmit(e) {
    console.log("submit",e);
    e.preventDefault();
    
    let data =
    {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        contact: document.querySelector('#contact').value,
        year: document.querySelector('#year').value,
        branch: document.querySelector('#branch').value,
        url:url
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
    document.getElementById('manit').reset();
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
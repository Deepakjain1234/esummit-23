function manitclick(){
    document.getElementById("non-manit").style.display = "none";
    document.getElementById("manit").style.display = "block";
}
function nonmanitclick(){
    document.getElementById("non-manit").style.display = "block";
    document.getElementById("manit").style.display = "none";
}
let url = ""

function uploadimage() {
    alert("Please wait your id proof is uploading")
    var storage = firebase.storage();
    var file = document.getElementById("files").files[0];
    console.log(file);
    var storageref = storage.ref();
    var thisref = storageref.child(file.name).put(file);
    thisref.on('state_changed', function (snapshot) {


    }, function (error) {

    }, function () {
        // Uploaded completed successfully, now we can get the download URL
        thisref.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            //getting url of image
            alert('uploaded successfully'+downloadURL);
            url = downloadURL;
            // saveMessage(downloadURL);
            formSubmit(downloadURL);
        });
    });

    // Get values
    var url = getInputVal('url');
    // Save message
    // saveMessage(url);
}

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
let formMessage = firebase.database().ref('BPlan-Event-Registration');

//listen for submit event//(1)
document
    .getElementById('registration')
    .addEventListener('submit', formSubmit);


//Submit form(1.2)
function formSubmit(e) {
    // Get Values from the DOM
    console.log("form submitted", e);
    let data =
    {
        name1: document.getElementById('name1').value,
        email1: document.getElementById('email1').value,
        contact1: document.getElementById('contact1').value,
        name2: document.getElementById('name2').value,
        email2: document.getElementById('email2').value,
        contact2: document.getElementById('contact2').value,
        name3: document.getElementById('name3').value,
        email3: document.getElementById('email3').value,
        contact3: document.getElementById('contact3').value,
        name4: document.getElementById('name4').value,
        email4: document.getElementById('email4').value,
        contact4: document.getElementById('contact4').value,
        institute: document.getElementById('Institue').value,
        address: document.getElementById('address'),
        referral: document.getElementById('referral').value,
        idproof: e,
    }
    console.log(data);
    sendMessage(data);
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
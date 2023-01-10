
var firebaseConfig = {
    apiKey: "AIzaSyDfb2QT1AG3-2yqiiUo1mkOn170QRtK92A",
    authDomain: "ecell-1b04d.firebaseapp.com",
    projectId: "ecell-1b04d",
    storageBucket: "ecell-1b04d.appspot.com",
    messagingSenderId: "324153281020",
    appId: "1:324153281020:web:0d3d83bdb18d6e0f534a79",
    measurementId: "G-BW02JFHNT6",
    databaseURL: "https://ecell-1b04d-default-rtdb.firebaseio.com/"
};
firebase.initializeApp(firebaseConfig);
var messagesRef = firebase.database().ref('ipl-manit');
// document.getElementById('manit').addEventListener('submit', uploadimage);
//uploading file in storage
function uploadimage() {
    alert("Please wait your id proof is uploading")
    var storage = firebase.storage();
    var file = document.getElementById("files").files[0];
    var storageref = storage.ref();
    var thisref = storageref.child(file.name).put(file);
    thisref.on('state_changed', function (snapshot) {


    }, function (error) {

    }, function () {
        // Uploaded completed successfully, now we can get the download URL
        thisref.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            //getting url of image
            // document.getElementById("url").value = downloadURL;
            alert('uploaded successfully');
            saveMessage(downloadURL);
        });
    });

    // Get values
    // var url = getInputVal('url');
    // Save message
    // saveMessage(url);
}
function getInputVal(id) {
    document.getElementById('manit').reset();
}


// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase database
function saveMessage(url) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        Team: document.getElementById('team').value,
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
        imageurl: url,
    });
    swal({
        title: "Good job", text: "Registered successfully!", type:
            "success"
    }).then(function () {
        window.location.reload()
    }
    );

}
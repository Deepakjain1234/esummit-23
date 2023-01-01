function manitclick(){
    document.getElementById("non-manit").style.display = "none";
    document.getElementById("manit").style.display = "block";
}
function nonmanitclick(){
    document.getElementById("non-manit").style.display = "block";
    document.getElementById("manit").style.display = "none";
}

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
var messagesRef = firebase.database().ref('Checking');
document.getElementById(
	'manit').addEventListener('submit', uploadimage);
//uploading file in storage
function uploadimage(){
	alert("Please wait your id proof is uploading")
var storage = firebase.storage();
var file=document.getElementById("files").files[0];
var storageref=storage.ref();
var thisref=storageref.child(file.name).put(file);
thisref.on('state_changed',function(snapshot) {


}, function(error) {

}, function() {
// Uploaded completed successfully, now we can get the download URL
thisref.snapshot.ref.getDownloadURL().then(function(downloadURL) {
	//getting url of image
	document.getElementById("url").value=downloadURL;
	alert('uploaded successfully');
	saveMessage(downloadURL);
});
});

// Get values
var url = getInputVal('url');
// Save message
// saveMessage(url);
}
function getInputVal(id){
	document.getElementById('Stock-manit').reset();

}


// Function to get form values
function getInputVal(id){
return document.getElementById(id).value;
}

// Save message to firebase database
function saveMessage(url){
var newMessageRef = messagesRef.push();
newMessageRef.set({
    name: document.querySelector('#name').value,
    email: document.querySelector('#email').value,
    contact: document.querySelector('#contact').value,
    year: document.querySelector('#year').value,
    branch: document.querySelector('#branch').value,    
    imageurl:url,
});
swal({title: "Good job", text: "Registered successfully!", type: 
"success"}).then(function(){ 
   location.reload();
   }
);

}

//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDzOZ7K4XK9zCoJFhNcGo6e0TIdxXdEw6M",
      authDomain: "kwitter-app-aad6f.firebaseapp.com",
      databaseURL: "https://kwitter-app-aad6f-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-aad6f",
      storageBucket: "kwitter-app-aad6f.appspot.com",
      messagingSenderId: "134010512818",
      appId: "1:134010512818:web:73dadcd3543817ef3870ab"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("Username")
    document.getElementById("username").innerHTML="Welcome "+username+"!"
    function addRoom(){
room_name=document.getElementById("room_name").value
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"  
    })
    localStorage.setItem("room_name",room_name)
    window.location="kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoom_name(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();

function redirectToRoom_name(name){
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("Username")
      localStorage.removeItem("room_name")
      window.location="index.html"
}
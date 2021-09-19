//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name")
    function send(){
          msg=document.getElementById("msg").value
          firebase.database().ref(room_name).push({
                username: username,
                 message:msg,
                 like:0

          })
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
uname=message_data['username']
console.log(uname)
nametag="<h4>"+uname+"<img class='user_tick' src='tick.png'></h4>"
message=message_data['message']
msgtag="<h4 class='message_h4'>"+message+"</h4>"
like=message_data['like']
likebutton="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>"
spantag="<span class='glyphicon glyphicon-thumbs-up'> Like: "+like+"</span></button><hr>"
row=nametag+msgtag+likebutton+spantag
document.getElementById("output").innerHTML+=row
//End code
      } });  }); }
getData();
function update_like(msgid){
      buttonid=msgid
      likes=document.getElementById(buttonid).value
      updatedlike=Number(likes)+1
      firebase.database().ref(room_name).child(msgid).update(
            {
                  like:updatedlike
            }
      )
}
function logout(){
      localStorage.removeItem("Username")
      localStorage.removeItem("room_name")
      window.location="index.html"
}
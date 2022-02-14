//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyA789vAyA2O8RaCrgdaEkzZzxNb6wU0gGc",
      authDomain: "classtest-6c579.firebaseapp.com",
      databaseURL: "https://classtest-6c579-default-rtdb.firebaseio.com",
      projectId: "classtest-6c579",
      storageBucket: "classtest-6c579.appspot.com",
      messagingSenderId: "849701866820",
      appId: "1:849701866820:web:dd768be6584cb6bf089b11"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)

    function send(){
msg= document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

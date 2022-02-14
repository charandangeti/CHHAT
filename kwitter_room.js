
// Your web app's Firebase configuration
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
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML =
"welcome "+ user_name +"!";

function addRoom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);

window.location ="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code      
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>" ;
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location ="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}
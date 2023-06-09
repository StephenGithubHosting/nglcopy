$('#send').css("display","none");
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
      import {
        getDatabase,
        set,
        ref,
        push,
        child,
        onValue,
        update
      } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
      import {
        getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
      } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-P56cifj5xlA7yWChGk9PWZYUvncKEJs",
  authDomain: "stephennglcopy.firebaseapp.com",
  projectId: "stephennglcopy",
  storageBucket: "stephennglcopy.appspot.com",
  messagingSenderId: "174675733270",
  appId: "1:174675733270:web:559a11f05d3bb1a8bf3e37"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const messageCount = ref(database, 'messageCount');


let messageCNT = 0;
onValue(messageCount, (snapshot)=>{
  messageCNT = snapshot.val().msgCount;
});


$('#teArea').on("input",()=>{
  if ($('#teArea').val() != ''){
    $('#send').css("display","block");
  } else{
    $('#send').css("display","none");
  }
})



$('#send').on("click", ()=>{
  const messages = ref(database, `messages/${messageCNT}`);
  update(messageCount, {
    msgCount: messageCNT + 1,
  }),
  update(messages, {
      message: document.getElementById('teArea').value,
  }).then(()=>{
    $('.loader').css("display","flex");
    $('#send').css("display","none");
    $('#teArea').css("display","none");
    setTimeout(() => {
    $('.loader').css("display","none");
        $('.title h1').html('Thank you, Your message has been sended!');
    }, 1000);
  });
});

$('#stephen').on('click' , ()=>{
  location.href = 'https://beta-myportofolio-it.netlify.app/';
})

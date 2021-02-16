var flag=0;
function INITFB(){
   function loadscript(callback){
    var script1= document.createElement('script');
	var script2= document.createElement('script');
	var script3= document.createElement('script');
    script1.src="https://www.gstatic.com/firebasejs/7.2.2/firebase-app.js";
	script2.src="https://www.gstatic.com/firebasejs/7.2.2/firebase-auth.js";
	script3.src="https://www.gstatic.com/firebasejs/7.2.2/firebase-database.js";
    	
	document.getElementsByTagName('head')[0].appendChild(script1);

    function fScript2(){
    document.getElementsByTagName('head')[0].appendChild(script2);
    }

    function fScript3(){
    document.getElementsByTagName('head')[0].appendChild(script3);
    }
    script1.onload= fScript2();
    script2.onload= fScript3();
    script3.onload=function(){callback()};    
   }
  
  function Init(){
    // Initialize Firebase
    var script= document.createElement('script');
    script.innerHTML='var config = {apiKey: "AIzaSyDUqn6gT6aACJJXh67hRbr6uCLfs1cGqqQ", authDomain: "flappy-8cfca.firebaseapp.com", databaseURL: "https://flappy-8cfca.firebaseio.com", projectId: "flappy-8cfca", storageBucket: "flappy-8cfca.appspot.com", messagingSenderId: "834464942496" }; firebase.initializeApp(config);';
    document.getElementsByTagName('head')[0].appendChild(script);
    flag=1;
  }
  loadscript(Init);
}
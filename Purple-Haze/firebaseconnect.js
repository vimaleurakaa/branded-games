//Objects with values with which we will interact from our eventsheet

var DB={
  score:0,
  email:"empty",
  name:"empty",
  s1:0,
  s2:0,
  s3:0,
  s4:0,
  s5:0,
  s6:0,
  e1:"",
  e2:"",
  e3:"",
  e4:"",
  e5:"",
  e6:"",
}

//Realtime-Database Functions
function SetVal(name,email,score){
  firebase.database().ref('users/' + email).set({    
	score: score,
	name: name,
  })
}
function ReadVal(email){
  var dbRef= firebase.database().ref('users/'+ email+'/score');
	dbRef.on('value', function(snap) {
    if(snap.exists())
      DB.score= snap.val();
    else
      SetVal(0,'empty','empty');
  })
  
  var dbRefName= firebase.database().ref('users/'+ email+'/name');
	dbRefName.on('value', function(snap) {
    if(snap.exists())
      DB.name= snap.val();
    else
      SetVal(0,'empty','empty');
  })
  
}
function SetLB(score,email, name){
  firebase.database().ref('leaderboard/' + email).set({
	score: score,
	name: name,
	
  })
  console.log("read");
}
function ReadLB(){
  var i;
	var query = firebase.database().ref('leaderboard').orderByChild("score").limitToLast(6);
	query.on("value", function(snapshot) {
		i=0;
		snapshot.forEach(function(childSnapshot) {
		var childDataName = childSnapshot.child('name').val();
		var childDataScore = childSnapshot.child('score').val();
		switch(i)
		{	
			case 0: DB.e6=childDataName;
					DB.s6=childDataScore;
			break;
			case 1:
					DB.e5=childDataName;
					DB.s5=childDataScore;
            break;
			case 2: DB.e4=childDataName;
					DB.s4=childDataScore;
			break;		
			case 3: DB.e3=childDataName;
					DB.s3=childDataScore;
			break;		
			case 4: DB.e2=childDataName;
					DB.s2=childDataScore;
			break;		
			case 5: DB.e1=childDataName;
					DB.s1=childDataScore;
			break;		
				
					
		}
		++i;
	});
	
});
}


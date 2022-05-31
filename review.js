function submit_review(){

  var user=document.getElementById('user').value;
	var review=document.getElementById('review').value;
  if(user!="" && review!=""){
    alert("Your review has been sumbitted,Thank You :)");
     document.getElementById('reviews').innerHTML+=
     "User: "+
     document.getElementById('user').value +
     "<br><hr>Branch:"+
     document.getElementById('branch').value+
     "<br><hr>Review:"+
     document.getElementById('review').value+
     "<hr><hr>";
   }

}

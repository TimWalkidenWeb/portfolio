function hideLogo(){
  var navigation = document.getElementById('navigation');
  navigation.style.visibility ="hidden";
  // visibility: hidden;
  navigation.style.opacity ="0";
  navigation.style.transition ="visibility 0s 2s, opacity 2s linear";
 // opacity: 0;
 // transition: visibility 0s 2s, opacity 2s linear;
}
function fadein(i){
 hideLogo()

  //
    var nextevent = document.getElementById(i);
    nextevent.style.display = 'block';

    setTimeout(function(){

     nextevent.style.visibility ="visible";
     nextevent.style.opacity ="1";
     nextevent.style.transition ="opacity 4s linear";
   }  , 3000);
}


function fadeout(i , d){
  var navigation = document.getElementById(i);
  var nextevent = document.getElementById(d);
  navigation.style.visibility ="hidden";
  // visibility: hidden;
  navigation.style.opacity ="0";
  navigation.style.transition ="visibility 0s 2s, opacity 2s linear";



  setTimeout(function(){

    navigation.style.display = 'none';
    nextevent.style.display = 'block';
  },4000);

  setTimeout(function(){
    nextevent.style.visibility ="visible";
    nextevent.style.opacity ="1";
    nextevent.style.transition ="opacity 4s linear";


 }  , 4001);








}

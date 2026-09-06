//the websitcomputer number
   let webnumber=Math.floor(Math.random()*11);
   console.log(webnumber);
while(true){
     //user guessed number
   let usernumber=prompt("اختار رقم من 0 الى 10"); 
    
   if (usernumber > webnumber) {
    alert("اقل");
 
   } else if (usernumber < webnumber) {
            alert("اعلى");

   }
    else {
            alert("يا اسطورة");
break;
    }
}

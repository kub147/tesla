var tog = 0;
function darkmode() {
   var element = document.body;
   var header = document.getElementById('header');
   element.classList.toggle("dark");
    header.classList.toggle("dark");
   if(tog == 0){
    tog = 1
    document.getElementById('logo').src='img/logo2.png'

   } else {
    tog = 0
    document.getElementById('logo').src='img/logo.png'

   }

}

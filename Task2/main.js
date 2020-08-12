document.addEventListener('DOMContentLoaded', start, false);
function start(){
var temp = true;
const sb = () =>{

   const ham = document.querySelector(".hamburger-wrapper");
   const nav = document.querySelector(".sidebar");
   const lines = document.querySelector(".hamburger-wrapper");
   ham.addEventListener('click',()=>{

         if(temp){
           nav.style.transform = "translateX(0%)";
         }
         else{
           nav.style.transform = "translateX(-100%)";
         }
         temp = !t;
         lines.classList.toggle("toggle");
   });





}
sb();
}
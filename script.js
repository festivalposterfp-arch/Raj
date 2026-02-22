console.log("Website Loaded");
function openPopup(src){
document.getElementById("popup").style.display="flex";
document.getElementById("popupImg").src=src;
}

function closePopup(){
document.getElementById("popup").style.display="none";
}
window.addEventListener("load",function(){
document.getElementById("loader").style.display="none";
});
window.addEventListener("scroll",function(){
const nav=document.querySelector(".navbar");

if(window.scrollY>50){
nav.style.background="rgba(0,0,0,0.8)";
}
else{
nav.style.background="rgba(255,255,255,0.05)";
}
});

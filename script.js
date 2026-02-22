console.log("Website Loaded");

/* POPUP */
function openPopup(src){
const popup=document.getElementById("popup");
const img=document.getElementById("popupImg");

if(popup && img){
popup.style.display="flex";
img.src=src;
}
}

function closePopup(){
const popup=document.getElementById("popup");

if(popup){
popup.style.display="none";
}
}

/* LOADER */
window.addEventListener("load", function(){
const loader=document.getElementById("loader");

if(loader){
loader.style.display="none";
}
});

/* NAVBAR SCROLL EFFECT */
window.addEventListener("scroll", function(){

const nav=document.querySelector(".navbar");

if(!nav) return;

if(window.scrollY>50){
nav.style.background="rgba(0,0,0,0.8)";
}else{
nav.style.background="rgba(255,255,255,0.05)";
}

});

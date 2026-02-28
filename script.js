console.log("Website Loaded");

/* LOADER */
window.addEventListener("load", function(){

const loader = document.getElementById("loader");

if(loader){
loader.classList.add("hide");

setTimeout(()=>{
loader.style.display="none";
},600);
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
function openLightbox(src) {
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}


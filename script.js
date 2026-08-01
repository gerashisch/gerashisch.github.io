console.log("Hello");
let topButton = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } 
    else {
        topButton.style.display = "none";
    }

};


function topFunction() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    

}

const searchInput = document.getElementById("searchInput");

if (searchInput) {

searchInput.addEventListener("input", function(){

let text = this.value.toLowerCase().trim();

let sections = document.querySelectorAll("section:not(.search-box)");

sections.forEach(function(section){

let content = section.innerText.toLowerCase();

if(content.includes(text) && text !== ""){

section.style.background="#fff8d6";
section.style.border="3px solid #ffc107";

}else{

section.style.background="";
section.style.border="";

}

});

});
}


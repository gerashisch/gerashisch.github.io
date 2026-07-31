console.log("Hello");
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

let value = searchInput.value.toLowerCase();

let sections = document.querySelectorAll("section");

sections.forEach(function(section){

let text = section.innerText.toLowerCase();

if(value === "" || text.includes(value)){
section.style.opacity = "1";
}
else{
section.style.opacity = "0.3";
}

});

});

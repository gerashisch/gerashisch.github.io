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

// جستجوی داخلی سایت
window.onload = function(){

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("input", function(){

let text = this.value.toLowerCase();

let sections = document.querySelectorAll("section");

sections.forEach(function(section){

    if(section.classList.contains("search-box")){
        return;
    }

    let content = section.innerText.toLowerCase();

    if(text === ""){
        section.style.display = "block";
    }
    else if(content.includes(text)){
        section.style.display = "block";
    }
    else{
        section.style.display = "none";
    }

});

});

}

};
const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        let searchText = this.value.trim().toLowerCase();

        let sections = document.querySelectorAll("section:not(.search-box)");

        sections.forEach(function(section){

            let content = section.innerText.toLowerCase();

            if (searchText === "") {
                section.style.opacity = "1";
            }
            else if (content.includes(searchText)) {
                section.style.opacity = "1";
            }
            else {
                section.style.opacity = "0.3";
            }

        });

    });

}
window.onload = function(){

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", function(){

let text = searchInput.value.toLowerCase();

let sections = document.querySelectorAll("section");

sections.forEach(function(section){

let content = section.textContent.toLowerCase();

if(content.includes(text)){
section.style.display = "block";
}
else{
section.style.display = "none";
}

});

});

}

};

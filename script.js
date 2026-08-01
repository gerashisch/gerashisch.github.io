console.log("Hello");
let topButton = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
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

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", function(){

    let value = searchInput.value.toLowerCase();

    let sections = document.querySelectorAll("section");

    sections.forEach(function(section){

        let text = section.innerText.toLowerCase();

        if(text.includes(value) || value === ""){
            section.style.display = "block";
        }
        else{
            section.style.display = "none";
        }

    });

});

}

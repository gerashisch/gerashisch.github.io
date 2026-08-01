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

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        let searchText = this.value.trim().toLowerCase();

        let sections = document.querySelectorAll("section");

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

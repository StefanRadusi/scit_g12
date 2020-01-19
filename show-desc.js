let showDescriptionSpan = document.querySelectorAll("#show_desc");

let shortDescription = document.querySelectorAll(".article-short-desciption");


for(let i = 0; i < showDescriptionSpan.length; i++) {

    showDescriptionSpan[i].addEventListener("click" , displayShortDescription);

}
 

let open = false;

function displayShortDescription() {
    let article = this.closest(".article")
    let test = article.querySelector(".article-short-description");

        test.classList.add("displayDescription");

        if(open) {
            test.classList.remove("displayDescription");
            this.innerHTML = "show desc";
            open = false;
        } else {
            test.classList.add("displayDescription");
            this.innerHTML = "hide desc";
            open = true;
        }

        event.stopPropagation();

}



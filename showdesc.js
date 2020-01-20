
let showDescriptionSpan = document.querySelectorAll("#show_desc");
let shortDescription = document.querySelectorAll(".article-short-description");


for(let j = 0; j< showDescriptionSpan.length; j++){
    showDescriptionSpan[j].addEventListener("click", DisplayShortDescription);
    
}




let isOpen = false;


function DisplayShortDescription () {
    let article = this.closest(".article")
    let test = article.querySelector('.article-short-description');

    test.classList.add("displayDescription");

    if(isOpen){
        test.classList.remove("displayDescription");
        this.innerHTML = "show desc";
        isOpen = false;
    } else {
        test.classList.add("displayDescription");
        this.innerHTML = "hide desc";
        isOpen = true;
    }

    event.stopPropagation();
   
}


allShowButtons=document.getElementsByClassName("show-button");
allArticles=document.getElementsByClassName("article");
//Add hide class to all articles. When the page is open all articles descriptions are not shown
//and the hide button is not displayed on the page
for (let j=0;j<allArticles.length;j++){
    allArticles[j].getElementsByClassName("article-short-description")[0].classList.add("hide"); 
    document.getElementsByClassName("hide-button")[j].classList.add("hide");
}

 for (let i=0;i<allShowButtons.length;i++){
    allShowButtons[i].addEventListener("click", function(){
        document.getElementsByClassName("show-button")[i].classList.add("hide");
        document.getElementsByClassName("hide-button")[i].classList.remove("hide");
        allArticles[i].getElementsByClassName("article-short-description")[0].classList.remove("hide");  
        

    });
 }

allHideButtons=document.getElementsByClassName("hide-button");
for (let i=0;i<allHideButtons.length;i++){
    allHideButtons[i].addEventListener("click", function(){
       document.getElementsByClassName("hide-button")[i].classList.add("hide");
       document.getElementsByClassName("show-button")[i].classList.remove("hide");
        allArticles[i].getElementsByClassName("article-short-description")[0].classList.add("hide");  

   });
}
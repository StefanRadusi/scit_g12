let showDescList = document.getElementsByClassName("show-desc");
for (let showDesc of showDescList) {
    showDesc.addEventListener("click", function (event) {
        let description = this.closest('.article').querySelector('.article-short-description');
        if (!description.classList.contains('expanded')) {
            description.classList.add('expanded');
            this.innerText = 'hide desc';
            description.style.height = "30px";
        } else {
            description.classList.remove('expanded');
            this.innerText = 'show desc';
            description.style.height = "0px";
        }

        event.stopPropagation();
    });
}

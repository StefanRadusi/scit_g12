//cand apas prima oara butonul nu arata nimic?????
//dar cand apas a doua oara merge :))
function showDesc1() {


    let desc1 = document.getElementById("shortDesc1");
    
    if (desc1.style.display === "none") {
        desc1.style.display = "block";
        document.getElementById("butDesc1").value="HIDE DESC";
    } else {
        desc1.style.display = "none";
        document.getElementById("butDesc1").value="SHOW DESC";
    }
}
function showDesc2() {
    let desc2 = document.getElementById("shortDesc2");

    if (desc2.style.display === "none") {
        desc2.style.display = "block";
        document.getElementById("butDesc2").value="HIDE DESC";
    } else {
        desc2.style.display = "none";
        document.getElementById("butDesc2").value="SHOW DESC";
    }
}

function showDesc3() {
    let desc3 = document.getElementById("shortDesc3");
    
    if (desc3.style.display === "none") {
        desc3.style.display = "block";
        document.getElementById("butDesc3").value="HIDE DESC";
    } else {
        desc3.style.display = "none";
        document.getElementById("butDesc3").value="SHOW DESC";
    }
}
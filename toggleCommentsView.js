
document.getElementById("read").addEventListener("click", showReadSection);

document.getElementById("add").addEventListener("click", function(event) {
  console.log(event);

  document.getElementById("add").classList.add("selected");
  document.getElementById("read").classList.remove("selected");
  document.getElementById("edit-section").classList.add("comments-selected-edit");
  document.getElementById("read-section").classList.remove("comments-selected-read");
});

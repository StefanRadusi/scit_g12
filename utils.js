function showReadSection() {
  document.getElementById("read").classList.add("selected");
  document.getElementById("add").classList.remove("selected");
  document
    .getElementById("read-section")
    .classList.add("comments-selected-read");
  document
    .getElementById("edit-section")
    .classList.remove("comments-selected-edit");
}

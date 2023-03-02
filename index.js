function dropdownAnimation() {
    dropDownMenu = document.getElementById("dpwn");
    dropDownMenu.classList.toggle("dropdown")
} 

function toggleTextArea(){
    other = document.getElementById("other-checkbox");
    textArea = document.getElementById("feedback-area");
    if(other.checked && textArea.style.display === "none") {
        textArea.style.display = "block";
      } else {
        textArea.style.display = "none";
      }
}
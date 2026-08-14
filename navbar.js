const profileButton = document.getElementById("Profile_button");
const profileDropdown = document.getElementById("Profile_dropdown");

profileButton.addEventListener("click", function (event) {
  event.stopPropagation();
  profileDropdown.classList.toggle("show");
});

document.addEventListener("click", function () {
  profileDropdown.classList.remove("show");
});
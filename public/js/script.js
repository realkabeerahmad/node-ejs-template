// script.js

document.addEventListener("DOMContentLoaded", function () {
  const dropdownTriggers = document.querySelectorAll(".main-link span");

  dropdownTriggers.forEach((trigger) => {
    trigger.addEventListener("mouseover", function () {
      const dropdown = this.parentNode.querySelector(".dropdown");
      if (dropdown) {
        dropdown.style.display = "block";
      }
    });

    trigger.addEventListener("mouseout", function () {
      const dropdown = this.parentNode.querySelector(".dropdown");
      if (dropdown) {
        dropdown.style.display = "none";
      }
    });
  });

  const dropdownMenus = document.querySelectorAll(".dropdown");

  dropdownMenus.forEach((menu) => {
    menu.addEventListener("mouseover", function () {
      this.style.display = "block";
    });

    menu.addEventListener("mouseout", function () {
      this.style.display = "none";
    });
  });
});

"use strict";

const popup1 = document.querySelector(".popup");
const galaryItem = document.querySelectorAll(".galary__item");
const overlay = document.querySelector(".overlay");

const openPopup = function () {
  console.log("clicked");
  popup1.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closePopup = function () {
  console.log("clicked");
  popup1.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < galaryItem.length; i++) {
  galaryItem[i].addEventListener("click", openPopup);
}

//document.querySelector(".galary__item").addEventListener("click", openPopup);
overlay.addEventListener("click", closePopup);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  //ESC KEY
  if (e.key === "Escape") {
    if (!popup1.classList.contains("hidden")) {
      closePopup();
    }
  }
});

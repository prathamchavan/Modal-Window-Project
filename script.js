"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  console.log(btnOpenModal[i].addEventListener("click", openModal));
}

//here we have given written 'closeModal' and not 'closeModal()'
//because as soon as we write the 'closeModal()' javaScript will
// execute the function even if user do not click on the text
// so we write 'closeModal' so that event will execute on only on
// when user will click on the code
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//handling esc keypress event
document.addEventListener("keydown", function (event) {
  // closeModal();
  // console.log(event.key);

  if (event.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});

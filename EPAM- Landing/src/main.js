const moreDetails = document.querySelectorAll(".intro-info > .d-none");
const readMeBtn = document.querySelector(".intro-info > button");
const serviceBtns = document.querySelectorAll(".footer-card > button");
const serviceLists = document.querySelectorAll(".footer-card > ul");

readMeBtn.addEventListener("click", (e) => toggleItems(e, 0, moreDetails));
serviceBtns.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => toggleItems(e, idx, serviceLists));
});

function toggleItems(e, idx, target) {
  e.preventDefault();
  target[idx].classList.toggle('d-none');
}

//Lắng nghe sự kiện di chuột trên các link của thanh navbar
const navLinks = document.querySelectorAll(".nav .nav-list li a");
// console.log(navLinks);
navLinks.forEach((link) => {
  link.addEventListener("mouseover", (e) => {
    clearNavActive();
    link.classList.add("nav-active");
  });
});
function clearNavActive() {
  navLinks.forEach((link) => {
    link.classList.remove("nav-active");
  });
}

//Lắng nghe sự kiện khi di chuột vào các nút bấm sign in và sign up
const menuBtns = document.querySelectorAll(".menu .menu-btn");
menuBtns.forEach((btn) => {
  btn.addEventListener("mouseover", (e) => {
    clearMenuBtnActive();
    btn.classList.add("menu-btn__active");
  });
  btn.addEventListener("click", (e) => {
    clearBtnClick();
    btn.classList.add("menu-btn__click");
  });
});

function clearBtnClick() {
  menuBtns.forEach((btn) => {
    btn.classList.remove("menu-btn__click");
  });
}
function clearMenuBtnActive() {
  menuBtns.forEach((btn) => {
    btn.classList.remove("menu-btn__active");
  });
}

//Canvas vẽ icon plav
const canvas = document.querySelector("#myCanvas");
const cxt = canvas.getContext("2d");
cxt.beginPath();
cxt.moveTo(23, 23);
cxt.lineTo(23, 40);
cxt.lineTo(40, 31);
cxt.closePath();
cxt.fillStyle = "#1EBFC1";
cxt.fill();

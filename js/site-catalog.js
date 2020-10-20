var catalog = document.querySelectorAll(".menu-item");
var menu = document.querySelector(".indent");
var menuModal = document.querySelector(".sub-menu");
var loupe = document.querySelector(".site-loupe");
var loupeModal = document.querySelector(".modal-loupe");
var link = document.querySelector(".login-link");
var linkModal = document.querySelector(".modal-input");
var search = loupeModal.querySelector(".search");
var formModal = document.querySelector(".modal-login");
var basket = document.querySelector(".site-basket");
var basketModal = document.querySelector(".modal-basket");



loupe.addEventListener("mouseenter", function (evt) {
    evt.preventDefault();
    loupeModal.classList.add("modal-show");

    if (loupeModal.addEventListener("mouseover", function (evt) {
        evt.preventDefault();
        loupeModal.classList.add("modal-show");
    })); 

    if (loupeModal.addEventListener("mouseout", function (evt){
        evt.preventDefault();
        loupeModal.classList.remove("modal-show");
    }));

});


link.addEventListener("mouseover", function (evt) {
    evt.preventDefault();
    linkModal.classList.add("modal-show");

    if (linkModal.addEventListener("mouseover", function (evt) {
        evt.preventDefault();
        linkModal.classList.add("modal-show");
    })); 

    if (linkModal.addEventListener("mouseout", function (evt){
        evt.preventDefault();
        linkModal.classList.remove("modal-show");
    }));
});


menu.addEventListener("mouseover", function (evt) {
    evt.preventDefault();
    menuModal.classList.add("modal-show");

    if (menuModal.addEventListener("mouseover", function (evt) {
        evt.preventDefault();
        menuModal.classList.add("modal-show");
    })); 

    if (menuModal.addEventListener("mouseout", function (evt){
        evt.preventDefault();
        menuModal.classList.remove("modal-show");
    }));

});

basket.addEventListener("mouseover", function (evt) {
    evt.preventDefault();
    basketModal.classList.add("modal-show");

    if (basketModal.addEventListener("mouseover", function (evt) {
        evt.preventDefault();
        basketModal.classList.add("modal-show");
    })); 

    if (basketModal.addEventListener("mouseout", function (evt){
        evt.preventDefault();
        basketModal.classList.remove("modal-show");
    }));

});
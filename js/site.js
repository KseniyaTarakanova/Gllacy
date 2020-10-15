var catalog = document.querySelectorAll(".menu-item");
var menu = document.querySelector(".indent");
var menuModal = document.querySelector(".sub-menu");
var loupe = document.querySelector(".site-loupe");
var loupeModal = document.querySelector(".modal-loupe");
var link = document.querySelector(".login-link");
var linkModal = document.querySelector(".modal-input");
var search = loupeModal.querySelector(".search");
var button = document.querySelector(".button-form");
var close = document.querySelector(".modal-login-close");
var formModal = document.querySelector(".modal-login");
var form = formModal.querySelector("form"); 
var login =formModal.querySelector("[name=login]");
var email = formModal.querySelector("[name=email]");
var storage = localStorage.getItem("login");

var isStorageSupport = true;
var storage = "";


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


button.addEventListener("click", function (evt) {
    evt.preventDefault();
    formModal.classList.add("modal-show");
    
    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    formModal.classList.remove("modal-show");
    formModal.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
    if (!login.value || !email.value) {
        evt.preventDefault(); 
        formModal.classList.remove("modal-error");
        formModal.offsetWidth = formModal.offsetWidth;
        formModal.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
    
});

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (formModal.classList.contains("modal-show")) {
            evt.preventDefault();
            formModal.classList.remove("modal-show");
            formModal.classList.remove("modal-error");
        }
    }
});
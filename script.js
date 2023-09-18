const menuTogle = document.querySelector('.menu-togle');
const nav = document.querySelector('.navbar ul');
const togleSpan = document.querySelector('.menu-togle span');

$(menuTogle).click(function(){
    $(menuTogle).toggleClass('active');
});

$(menuTogle).click(function(){
    $(nav).toggleClass("slide-nav");
  });
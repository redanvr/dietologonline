/*jshint esversion: 6 */

const menuBurger = document.querySelector('.menu__burger');
const menuBody = document.querySelector('.menu__body');

if(menuBurger){
    menuBurger.addEventListener("click", function() {
        document.body.classList.toggle('_lock');
        menuBurger.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
menuBody.addEventListener("click", function(){
    document.body.classList.toggle('_lock');
    menuBurger.classList.toggle('_active');
    menuBody.classList.toggle('_active');
});
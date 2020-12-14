const burgerButon= document.getElementById('burgerButon');
const buttonBurger= document.getElementById('buttonBurger');
const formButoon= document.getElementById('formButoon');
const buttonBurgerDe= document.getElementById('buttonBurgerDe');

buttonBurgerDe.style.display = "none";

function boton() {
    burgerButon.style.display = "block";
    buttonBurgerDe.style.display = "block";
    buttonBurger.classList = 'd-none'
}
function voton() {
    burgerButon.style.display = "none";
    buttonBurger.classList = ''
    buttonBurgerDe.style.display = "none";
}
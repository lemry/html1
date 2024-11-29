let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    clientForm.classList.remove('active');
    navbar.classList.remove('active');
    soonForm.classList.remove('active');
}

let clientForm = document.querySelector('.client-form');

document.querySelector('#client-btn').onclick = () =>
{
    clientForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    soonForm.classList.remove('active');
}

let soonForm = document.querySelector('.soon-form');

document.querySelector('#soon-btn').onclick = () =>
{
    clientForm.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    soonForm.classList.toggle('active');
}




let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
    {
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        clientForm.classList.remove('active');
        soonForm.classList.remove('active');
    }




window.onscroll = () =>
    {
        searchForm.classList.remove('active');
        clientForm.classList.remove('active');
        navbar.classList.remove('active');
    }










// Sélectionne tous les boutons
const buttons = document.querySelectorAll('.bouton');
let boutonP = document.querySelector('.bouton-p');

// Initialiser le bouton le plus à gauche avec la classe active
let currentDefault = document.querySelector('.bouton1');
currentDefault.classList.add('active');
currentDefault.style.backgroundColor = boutonP.style.backgroundColor;

// Fonction pour gérer le clic sur un bouton
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button === currentDefault) {
      // Si on clique sur le bouton déjà actif, rien ne se passe
      return;
    }

    // Retirer la classe "active" du bouton actuellement actif
    currentDefault.classList.remove('active');
    currentDefault.style.backgroundColor = 'rgb(0, 206, 141)'; // Couleur par défaut

    // Appliquer le style de bouton-p au bouton cliqué
    button.classList.add('active');
    button.style.backgroundColor = boutonP.style.backgroundColor;

    // Déplacer bouton-p à l'ancien bouton par défaut
    currentDefault = button;
  });
});


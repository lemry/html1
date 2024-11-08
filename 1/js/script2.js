let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    clientForm.classList.remove('active');
    navbar.classList.remove('active');
}

let clientForm = document.querySelector('.client-form');

document.querySelector('#client-btn').onclick = () =>
{
    clientForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
    {
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        clientForm.classList.remove('active');
        
    }




window.onscroll = () =>
    {
        searchForm.classList.remove('active');
        clientForm.classList.remove('active');
        navbar.classList.remove('active');
    }
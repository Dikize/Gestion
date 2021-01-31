const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');

btnMenu.addEventListener('click', function(){
    menu.classList.toggle('active');
})


const allLinks = document.querySelectorAll('.item-nav');

allLinks.forEach(function(item){

    item.addEventListener('click', function(){
        menu.classList.toggle('active');
    })

})



//#################> espace compteur <#################//

// triphase
const btntriphase = document.querySelector('.bouton-triphase');
const triphase = document.querySelector('.list-triphase');

btntriphase.addEventListener('click', function(){
    triphase.classList.toggle('active');
})

//
const allLinks_triphase = document.querySelectorAll('.contenu-triphase');

allLinks_triphase.forEach(function(item){

    item.addEventListener('click', function(){
        triphase.classList.toggle('active');
    })

})


//Compteur Arrive basse
const btnbasse = document.querySelector('.bouton-basse');
const basse = document.querySelector('.list-basse');

btnbasse.addEventListener('click', function(){
    basse.classList.toggle('active');
})

//
const allLinks_basse = document.querySelectorAll('.contenu-basse');

allLinks_basse.forEach(function(item){

    item.addEventListener('click', function(){
        basse.classList.toggle('active');
    })

})


//Compteur Arrive haute
const btnhaute = document.querySelector('.bouton-haute');
const haute = document.querySelector('.list-haute');

btnhaute.addEventListener('click', function(){
    haute.classList.toggle('active');
})

//
const allLinks_haute = document.querySelectorAll('.contenu-haute');

allLinks_haute.forEach(function(item){

    item.addEventListener('click', function(){
        haute.classList.toggle('active');
    })

})




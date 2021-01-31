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


//#################> Box Reporting <#################//

// Bouton journalier
const btnjournalier = document.querySelector('.bouton-journalier');
const journalier = document.querySelector('.list-journalier');

btnjournalier.addEventListener('click', function(){
    journalier.classList.toggle('active');
})


const allLinks_journalier = document.querySelectorAll('.contenu-journalier');

allLinks_journalier.forEach(function(item){

    item.addEventListener('click', function(){
        journalier.classList.toggle('active');
    })

})

// Bouton moyen
const btnmoyen = document.querySelector('.bouton-moyen');
const moyen = document.querySelector('.list-moyen');

btnmoyen.addEventListener('click', function(){
    moyen.classList.toggle('active');
})


const allLinks_moyen = document.querySelectorAll('.contenu-moyen');

allLinks_moyen.forEach(function(item){

    item.addEventListener('click', function(){
        moyen.classList.toggle('active');
    })

})


//#################> Box Stox <#################//

// ajout-stock
const btnajoutstock = document.querySelector('.bouton-ajoutstock');
const ajoutstock = document.querySelector('.list-ajoutstock');

btnajoutstock.addEventListener('click', function(){
    ajoutstock.classList.toggle('active');
})

//
const allLinks_ajoutstock = document.querySelectorAll('.contenu-ajoutstock');

allLinks_ajoutstock.forEach(function(item){

    item.addEventListener('click', function(){
        ajoutstock.classList.toggle('active');
    })

})

// demande-recharge
const btnrecharge = document.querySelector('.bouton-recharge');
const recharge = document.querySelector('.list-recharge');

btnrecharge.addEventListener('click', function(){
    recharge.classList.toggle('active');
})

//
const allLinks_recharge = document.querySelectorAll('.contenu-recharge');

allLinks_recharge.forEach(function(item){

    item.addEventListener('click', function(){
        recharge.classList.toggle('active');
    })

})

// inventaire stock
const btninventaire = document.querySelector('.bouton-inventaire');
const inventaire = document.querySelector('.list-inventaire');

btninventaire.addEventListener('click', function(){
    inventaire.classList.toggle('active');
})

//
const allLinks_inventaire = document.querySelectorAll('.contenu-inventaire');

allLinks_inventaire.forEach(function(item){

    item.addEventListener('click', function(){
        inventaire.classList.toggle('active');
    })

})

//#################> Box Administration <#################//

// Direction
const btnannoncedirection = document.querySelector('.bouton-annoncedirection');
const annoncedirection = document.querySelector('.list-annoncedirection');

btnannoncedirection.addEventListener('click', function(){
    annoncedirection.classList.toggle('active');
})

//
const allLinks_annoncedirection = document.querySelectorAll('.contenu-annoncedirection');

allLinks_annoncedirection.forEach(function(item){

    item.addEventListener('click', function(){
        annoncedirection.classList.toggle('active');
    })

})


// presence
const btnpresence = document.querySelector('.bouton-presence');
const presence = document.querySelector('.list-presence');

btnpresence.addEventListener('click', function(){
    presence.classList.toggle('active');
})

//
const allLinks_presence = document.querySelectorAll('.contenu-presence');

allLinks_presence.forEach(function(item){

    item.addEventListener('click', function(){
        presence.classList.toggle('active');
    })

})


// incident
const btnincident = document.querySelector('.bouton-incident');
const incident = document.querySelector('.list-incident');

btnincident.addEventListener('click', function(){
    incident.classList.toggle('active');
})

//
const allLinks_incident = document.querySelectorAll('.contenu-incident');

allLinks_incident.forEach(function(item){

    item.addEventListener('click', function(){
        incident.classList.toggle('active');
    })

})


//#################> Box test <#################//

// qcm
const btnqcm = document.querySelector('.bouton-qcm');
const qcm = document.querySelector('.list-qcm');

btnqcm.addEventListener('click', function(){
    qcm.classList.toggle('active');
})

//
const allLinks_qcm = document.querySelectorAll('.contenu-qcm');

allLinks_qcm.forEach(function(item){

    item.addEventListener('click', function(){
        qcm.classList.toggle('active');
    })

})


// astuce
const btnastuce = document.querySelector('.bouton-astuce');
const astuce = document.querySelector('.list-astuce');

btnastuce.addEventListener('click', function(){
    astuce.classList.toggle('active');
})

//
const allLinks_astuce = document.querySelectorAll('.contenu-astuce');

allLinks_astuce.forEach(function(item){

    item.addEventListener('click', function(){
        astuce.classList.toggle('active');
    })

})


// question
const btnquestion = document.querySelector('.bouton-question');
const question = document.querySelector('.list-question');

btnquestion.addEventListener('click', function(){
    question.classList.toggle('active');
})

//
const allLinks_question = document.querySelectorAll('.contenu-question');

allLinks_question.forEach(function(item){

    item.addEventListener('click', function(){
        question.classList.toggle('active');
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




// var bonton=document.getElementById("richie")
// var block=document.getElementsByClassName("bloc") // 
// //c'est qui permet d'écouteur un évenement
// bonton.addEventListener("click", function (){
// for (var i=0;i<4;i++){
//     console.log(block[i]) //sa permet d'afficher sur la console de navigateur
//     block[i].classList.toggle("fond") // c'est pour ajouter ou enlever une class(si le fond n'existe pas met sinon enleve)
// }
// }
// )

// function changerDeCouleur(){
//     var bonton=document.getElementById("richie")
//     var block=document.getElementsByClassName("bloc") // 
// //c'est qui permet d'écouteur un évenement

//     for (var i=0;i<4;i++){
//         console.log(block[i]) //sa permet d'afficher sur la console de navigateur
//         block[i].classList.toggle("fond") // c'est pour ajouter ou enlever une class(si le fond n'existe pas met sinon enleve)
//     }
// }
 
const saisie = document.getElementsByClassName('form-control')
 const submitBtn = document.getElementById('submit')
 //C'est pour enregister les données
let donnee = {}
 let infos = []
 //cette boucle c'est pour la récupération des données
 for(let i = 0; i<saisie.length;i++){
     saisie[i].addEventListener('keyup', ()=> {
         let value = saisie[i].value
        let id = saisie[i].id
        donnee[id] = value
     })

    }

   function login (e) {
    //regex pour le courrier électronique
    //vérification des données
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        e.preventDefault();
        for(let i = 0; i<saisie.length;i++){
            let affichErreur = document.getElementById(saisie[i].id+'-erreur');
                if (saisie[i].value === "") {
                    affichErreur.innerHTML = "<p>Ce champ est requis</p>"
                }
                if (saisie[i].id==="email" && !regexEmail.test(saisie[i].value)) {
                    affichErreur.innerHTML = "<p>veuiller saisir un email correct</p>" 
                } 
                if ((saisie[i].id === "email" && regexEmail.test(saisie[i].value)) && saisie[i].value !== ""){
                    const result = document.getElementById("result");
                    result.innerHTML = 
                   `<p>Prenom: ${donnee.prenom}</p>
                   <p>Nom: ${donnee.nom}</p>
                   <p>Email: ${donnee.email}</p>
                   <p>Message: ${donnee.message}</p>`
                   ;
                  }
        }
        //Affichage des données
        infos.push(donnee);
         //resetInputs();
       
         console.log(infos);
        }
    submitBtn.addEventListener("click", login ); 
    function changeFond(){
        var div = document.querySelectorAll(".bloc");
        for (let i = 0; i < div.length; i++) {
            div[i].classList.toggle('fond');
        }
    }






    

  
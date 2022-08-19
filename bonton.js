var bonton=document.getElementById("richie")
var block=document.getElementsByClassName("bloc") // 
//c'est qui permet d'écouteur un évenement
bonton.addEventListener("click", function (){
for (var i=0;i<4;i++){
    console.log(block[i]) //sa permet d'afficher sur la console de navigateur
    block[i].classList.toggle("fond") // c'est pour ajouter ou enlever une class(si le fond n'existe pas met sinon enleve)
}
}
)

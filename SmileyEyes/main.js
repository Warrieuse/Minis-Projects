
// je récupère mes ball en tableaux
let balls = document.getElementsByClassName('ball');

document.onmousemove = function () { // un evenement sur ma page qaund la souris bouge une fonction s'enclenche.
    // je vais faire bouger mes yeux par rapport à la souris donc je vais  d'abord calculer et récupérer la position de la souris en %.

    let x = event.clientX * 100 / window.innerWidth + "%"; // cette var indique la position  du client donc nous c'est la souris en position X donc horizontal la largeur de la page (fenetre).
    let y = event.clientY * 100 / window.innerHeight + "%"; // idem mais cette fois c'est la hauteur . 

    console.log("x=" + x); // test si la position fonctionne au niveau de la largeur.

    for (let i = 0; i < 2; i++) { // je fait une boucle comme ca mes yeux sont synchronisés
        balls[i].style.left = x; // et donc tout dépend quels balls  mes yeux se mettent en position par rapport à la souris en %
        balls[i].style.top = y;
        // à ce stade la ca fonctionne mais les ball peuvent disparaitre si la souris est trop basse par exemple 
        balls[i].style.transform = "translate(-" + x + ", -" + y +" )";
        // et avec ce dernier changement de style  la position des ball ne peut pas sortir de son parent.
    }
}
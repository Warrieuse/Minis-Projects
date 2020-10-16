var troch = document.documentElement; /*je récupère l'objet qui est ma lumière*/
troch.addEventListener('mousemove', e=>{ /*je rajoute un evenement lorsque ma souris bouge qui est la function e pour evenment on va dire*/ 
    troch.style.setProperty('--x', e.clientX + 'px')
    troch.style.setProperty('--y', e.clientY + 'px')
})
/*l'objet prend les propriétés horizontales et verticales la propiété clientX et clientY renvoi les coordonnées locale dans le DOM  */
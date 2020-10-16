// je récupère tout mes éléments je les met dans une constante

const titreSpan = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');

window.addEventListener('load', () =>{    //lorque la page auras fini de charger la function suivante commence

    const timeLine = gsap.timeline({paused: true});

        //on veut animer plusieurs chose ceci est une méthode.
    timeLine
    .staggerFrom(titreSpan, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    //                     on anime titreSpan  dure 1s {ce qu'on anime}, le temps qui s"écoule pour enclencher la prochaine animation)
    .staggerFrom(btns, 1,{opacity: 0, ease: "power2.out"}, 0.3, '-=1')/*'-=1' = l'animation commence 1 seconde avant que celle d'avant commence*/
        //from on anmé 1 element
    .from(l1, 1,{width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1,{width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 1,{transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1,{right: -200, ease: "power2.out"}, 0.3,  '-=2');

    timeLine.play();

})

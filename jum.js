let image_slider= document.getElementsByClassName("image_slider"); /* selecteur image html */
/* console.log(image_slider); */
let etape = 0;
let nbr_img=image_slider.length;                         /* declaration tableau des images */ /* longueur */

let precedent = document.querySelector('.precedent'); /* selecteur de class precedent css */
let suivant = document.querySelector('.suivant');     /* selecteur de class suivant css */

function EnleverActiveImages () {                         /*  desactiver limage active*/
    for (let i=0; i<nbr_img; i++) {                   /* parcourir le tableau */
        image_slider[i].classList.remove('active');
    }

}
suivant.addEventListener('click', function(){           /* evenement click */
    etape++;
    if(etape >= nbr_img){
        etape=0;
    }
    EnleverActiveImages();
    image_slider[etape].classList.add('active');

})  

precedent.addEventListener('click', function() {           /* Evenement click */
    etape --;                                           
    if (etape < 0){
        etape = nbr_img -1;
    }
        image_slider[etape].classList.add('active');
    
})
setInterval(function () {
    etape++;
    if(etape >= nbr_img){
        etape=0;
    }
    EnleverActiveImages();
    image_slider[etape].classList.add('active');
    
},3000)                                                    /* fréquence de changement */
/* footer pied de page */
const arrow1 = document.querySelector (".arrow1");
const arrow2 = document.querySelector (".arrow2");
arrow1.disabbled = true;

const slide_footer=()=>{
    const img1 =document.querySelectorAll('.imgfooter1');
    const img2 =document.querySelectorAll('.imgfooter2');
    for (let i=0; i<img1.length; i++){
        const slide1 = img1[i];
        const slide2 = img2[i];
        if (slide1.style.display =='block') {
            slide1.style.display = 'none';
            slide2.style.display = 'block';
            arrow2.disabbled = true;
            arrow1.disabbled = false;
        }
        else {
            slide1.style.display = 'block';  
            slide2.style.display = 'none';
            arrow1.disabbled = true;
            arrow2.disabbled = false;
        }

    }
}